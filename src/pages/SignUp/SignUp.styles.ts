import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h2 {
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 25px;
    width: 100%;
  }

  label {
    font-weight: bold;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    padding: 8px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 25px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const LogInAnnotation = styled.div`
  display: flex;
  gap: 10px;
  font-size: 25px;
`;
