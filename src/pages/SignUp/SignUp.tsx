import { useEffect } from 'react';
import {
  Button,
  Container,
  Form,
  LogInAnnotation,
  ValidationMessage,
} from './SignUp.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  useCreateUserMutation,
  useGetTokensMutation,
} from '../../store/api/api.slice';
import { TokensPayload, saveTokens } from '../../store/auth/auth.slice';
import { DEFAULT_AVATAR } from '../../shared/constants/constants';
import { SignupFormFields } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validateEmail } from '../../shared/helpers/formValidators';

const initialLogInPayload = {
  email: '',
  password: '',
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>();

  const dispatch = useDispatch<AppDispatch>();
  const [createUser, { data: userData = initialLogInPayload, isSuccess }] =
    useCreateUserMutation();
  const [getTokens] = useGetTokensMutation();

  const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
    await createUser({
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: DEFAULT_AVATAR,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      getTokens({ email: userData.email, password: userData.password })
        .unwrap()
        .then((tokens: TokensPayload) => dispatch(saveTokens(tokens)));
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <Container>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
            type="text"
            id="name"
          />
          {errors.name && (
            <ValidationMessage>{errors.name.message}</ValidationMessage>
          )}
        </div>
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
        <Button type="submit">Submit</Button>
      </Form>
      <LogInAnnotation>
        <p>Already have an account?</p>
        <Link to={'/auth/login'}>Login</Link>
      </LogInAnnotation>
    </Container>
  );
};
