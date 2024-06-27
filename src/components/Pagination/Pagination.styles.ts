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
    border: 1px solid black;
    font-size: 20px;
    background-color: lightgray;
  }

  li > button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
