import styled from 'styled-components';

export const StyledPagination = styled.div`
  justify-self: center;
  padding-top: 50px;

  ul {
    display: flex;
    gap: 15px;
  }

  li {
    min-width: 50px;
    min-height: 50px;
    list-style-type: none;
    background-color: transparent;
    border-radius: 10px;
    border: none;
  }

  li > button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: whitee;
    font-size: 20px;
    transition: 0.2s;
    cursor: pointer;
  }

  li > button:hover {
    background-color: lightgray;
  }

  li > button.active {
    background-color: darkgray;
    color: white;
  }
`;
