import styled from 'styled-components';

export const StyledGoods = styled.div`
  background: rgb(220, 220, 220);
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: 50px;
    text-align: center;
  }

  div.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    gap: 50px;
    justify-items: center;
    justify-content: center;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;
