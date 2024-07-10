import styled from 'styled-components';

export const CardWrapper = styled.div`
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }

  a {
    width: 350px;
  }
`;

export const StyledCard = styled.div`
  &.shopCard {
    border-radius: 15px;
    box-shadow: 1px 1px darkgray;
    height: 350px;
    width: 275px;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.cartCard {
    border-radius: 15px;
    box-shadow: 1px 1px darkgray;
    background-color: white;
    padding: 20px;
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 150px;
  }

  h3 {
    align-self: start;
  }

  p.price,
  p.category {
    align-self: end;
    font-size: 20px;
  }

  a.shopCard {
    display: grid;
    gap: 20px;
    grid-template-rows: 4fr 1.5fr 0.5fr;
    height: 100%;
    width: 100%;
    gap: 10px;
    text-decoration: none;
    color: black;
  }

  a.cartCard {
    display: grid;
    gap: 20px;
    grid-template-rows: 4fr 1.5fr 0.5fr 0.5fr;
    height: 100%;
    width: 100%;
    gap: 10px;
    text-decoration: none;
    color: black;
  }
`;
