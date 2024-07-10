import styled from 'styled-components';

export const Container = styled.div`
  && {
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
