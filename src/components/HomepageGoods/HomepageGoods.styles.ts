import styled from 'styled-components';

const StyledGoods = styled.div`
  height: 60vh;
  background: rgb(220, 220, 220);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: 50px;
    text-align: center;
  }

  div.cards {
    display: flex;
    gap: 100px;
    justify-content: center;
    height: 80%;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;

export default StyledGoods;
