import React, { useEffect, useState } from 'react';
import { Button, Container, Form, LogInAnnotation } from './SignUp.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  useCreateUserMutation,
  useGetTokensMutation,
} from '../../store/api/api.slice';
import { saveTokens } from '../../store/auth/auth.slice';
import { DEFAULT_AVATAR } from '../../shared/constants/constants';

const initialLogInPayload = {
  email: '',
  password: '',
};

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const [createUser, { data: userData = initialLogInPayload, isSuccess }] =
    useCreateUserMutation();
  const [getTokens] = useGetTokensMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUser({
      name: name,
      email: email,
      password: password,
      avatar: DEFAULT_AVATAR,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      getTokens({ email: userData.email, password: userData.password })
        .unwrap()
        .then((tokens) => dispatch(saveTokens(tokens)));
    }
  }, [isSuccess]);

  return (
    <Container>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
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
