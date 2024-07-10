import styled from 'styled-components';

export const Container = styled.form`
  height: 90vh;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  gap: 100px;
  padding: 100px;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  button {
    flex: 0;
  }
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  > div {
    margin-bottom: 10px;
  }

  div.info {
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 6px;
  }

  label {
    font-size: 30px;
  }

  p {
    font-size: 45px;
    font-weight: bold;
  }
  div.info > input {
    font-size: 30px;
    padding: 5px;
    width: 50%;
    border-radius: 10px;
    border: 1px solid gray;
  }
`;

export const Button = styled.button`
  flex-basis: 180px;
  height: min-content;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const RedButton = styled(Button)`
  background-color: darkred;
  font-size: 20px;
  font-weight: bold;
  width: 500px;

  &:hover {
    background-color: red;
  }
`;

export const GreenButton = styled(RedButton)`
  background-color: darkgreen;

  &:hover {
    background-color: green;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const LoadingPage = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;

  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

export const ValidationMessage = styled.p`
  && {
    font-size: 25px;
    color: darkred;
  }
`;
