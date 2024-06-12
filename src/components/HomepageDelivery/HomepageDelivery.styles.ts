import styled from 'styled-components';

const StyledDelivery = styled.div`
  width: 100%;
  height: 50vh;
  background: rgb(200, 200, 200);
  display: flex;
  justify-content: flex-end;
  align-itens: center;
  gap: 100px;

  img {
    width: 30%;
    scale: 0.8;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 20px;
  }
  h2 {
    font-size: 70px;
    font-weight: bold;
  }
  p {
    font-size: 35px;
    width: 60%;
  }
`;

export default StyledDelivery;
