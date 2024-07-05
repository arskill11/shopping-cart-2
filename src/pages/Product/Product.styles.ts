import styled from 'styled-components';

export const StyledProduct = styled.div`
  min-height: 100vh;
  background-color: rgb(230, 234, 254);
  padding: 50px;

  div.product {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div.product div.image {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 80px 0;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    max-height: 50vh;
  }

  div.image img {
    width: 15%;
  }

  h3 {
    font-size: 40px;
  }
  p {
    font-size: 28px;
    font-style: italic;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: rgb(180, 189, 236);
  border-radius: 15px;
  width: 20%;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgb(137, 155, 238);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  div.counter input {
    border-radius: 20px;
    font-size: 1.4rem;
    padding: 10px;
    width: 5rem;
    gap: 15px;
  }

  div.counter {
    display: flex;
    gap: 15px;
  }

  div.counter button {
    width: 50px;
    border-radius: 100%;
    font-size: 30px;
  }

  button {
    cursor: pointer;
  }
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
