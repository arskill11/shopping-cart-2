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
`;
