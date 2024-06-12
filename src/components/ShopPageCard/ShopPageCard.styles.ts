import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 1px 1px darkgray;
  height: 350px;
  width: 275px;
  background: white;
  padding: 20px;
  display: grid;
  grid-template-rows: 4fr 2.5fr 0.5fr 0.5fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 40%;
  }

  h3 {
    align-self: start;
  }

  p.price,
  p.rating {
    align-self: end;
    font-size: 20px;
  }
`;
