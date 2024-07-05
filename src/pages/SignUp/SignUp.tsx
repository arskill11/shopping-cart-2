import React, { useState } from 'react';
import { Button, Container, Form, LogInAnnotation } from './SignUp.styles';
import { createUser } from '../../api/auth';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(name, email, password);
  };

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
