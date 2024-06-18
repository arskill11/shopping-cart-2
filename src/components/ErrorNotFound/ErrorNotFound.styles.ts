import styled from 'styled-components';

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 30px;

  h2 {
    font-size: 50px;
    font-style: italic;
  }

  p {
    font-size: 30px;
  }

  a {
    text-decoration: none;
    border: none;
    border-radius: 15px;
    background-color: lightgray;
    color: black;
    padding: 25px 15px;
    font-size: 20px;
    transition: 0.5s;
  }

  a:hover {
    background-color: darkgray;
    color: white;
  }
`;
