import { useState } from 'react';
import {
  AuthorizationError,
  Button,
  Container,
  Form,
  SignUpAnnotation,
  ValidationMessage,
} from './LogIn.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { saveTokens } from '../../store/auth/auth.slice';
import { useGetTokensMutation } from '../../store/api/api.slice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormFields } from './types';
import { validateEmail } from '../../shared/helpers/formValidators';
import { setAccessTokenToLocalStorage } from '../../shared/helpers/localStorageManaging';

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const [isUser, setIsUser] = useState(true);
  const [getTokens] = useGetTokensMutation();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    await getTokens({ email: data.email, password: data.password })
      .unwrap()
      .then((tokens) => {
        setAccessTokenToLocalStorage(tokens.access_token);
        dispatch(saveTokens(tokens));
      })
      .catch((error) => {
        if (error.status === 401) {
          setIsUser(false);
          setTimeout(() => setIsUser(true), 2000);
        }
      });
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            {...register('email', {
              required: 'Email is required',
              validate: (value) => validateEmail(value),
            })}
            type="text"
            id="email"
          />
          {errors.email && (
            <ValidationMessage>{errors.email.message}</ValidationMessage>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password must be at least 4 characters',
              },
            })}
            type="password"
            id="password"
          />
          {errors.password && (
            <ValidationMessage>{errors.password.message}</ValidationMessage>
          )}
        </div>
        {isUser ? (
          <></>
        ) : (
          <AuthorizationError>
            Email or password is incorrect
          </AuthorizationError>
        )}
        <Button type="submit">Submit</Button>
      </Form>
      <SignUpAnnotation>
        <p>Don't have an account?</p>
        <Link to={'/auth/signup'}>SignUp</Link>
      </SignUpAnnotation>
    </Container>
  );
};
