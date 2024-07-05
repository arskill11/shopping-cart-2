import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 1px 1px darkgray;
  height: 400px;
  width: 300px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100px;
  }

  h3 {
    align-self: start;
  }

  p.price,
  p.rating {
    align-self: end;
    font-size: 20px;
  }

  a {
    display: grid;
    grid-template-rows: 4fr 1.5fr 0.5fr 0.5fr;
    height: 85%;
    width: 100%;
    gap: 10px;
    text-decoration: none;
    color: black;
  }

  div.manageButtons {
    display: flex;
    justify-content: space-between;
  }

  div.quantityButtons {
    display: flex;
    gap: 8px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  input {
    font-size: 1.2rem;
    padding: 5px;
    width: 3rem;
    border-radius: 8px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .deleteButton,
  .increaseButton,
  .decreaseButton {
    font-size: 30px;
    cursor: pointer;
  }
`;
