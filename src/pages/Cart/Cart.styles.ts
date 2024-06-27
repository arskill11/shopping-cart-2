import styled from 'styled-components';

export const StyledCart = styled.div`
  min-height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    padding-top: 20px;
  }

  div.products {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 100px;
    gap: 25px;
  }

  div.checkout {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding: 50px 100px;
    gap: 20px;
  }

  div.checkout > h3 {
    font-size: 30px;
    align-self: flex-start;
  }

  div.checkout > button {
    padding: 15px;
    font-size: 25px;
    border-radius: 15px;
    border: none;
    transition: 0.3s;
    cursor: pointer;
  }

  div.checkout>button: hover {
    background-color: darkgray;
    color: white;
  }
`;

export const SendingPage = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  background-color: lightgray;

  h3 {
    font-size: 70px;
  }
`;
