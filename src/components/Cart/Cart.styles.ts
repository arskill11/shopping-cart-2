import styled from 'styled-components';

const StyledCart = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    padding-top: 120px;
  }

  div.products {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    gap: 25px;
  }
`;

export default StyledCart;
