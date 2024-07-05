import React, { useState } from 'react';
import { Button, Container, Form, SignUpAnnotation } from './LogIn.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getTokens } from '../../store/auth/auth.slice';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getTokens({ email, password }));
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
      <SignUpAnnotation>
        <p>Don't have an account?</p>
        <Link to={'/auth/signup'}>SingUp</Link>
      </SignUpAnnotation>
    </Container>
  );
};
