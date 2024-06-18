import styled from 'styled-components';

export const StyledDelivery = styled.div`
  width: 100%;
  min-height: 50vh;
  background: rgb(200, 200, 200);
  display: flex;
  justify-content: flex-end;
  align-itens: center;
  gap: 100px;

  img {
    width: 30%;
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

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 0;

    img {
      width: 70%;
    }
    div {
      width: 100%;
      padding: 20px 0;
    }
    p,
    h2 {
      width: 100%;
      padding: 0 20px;
    }
  }
`;
