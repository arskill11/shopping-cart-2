import styled from 'styled-components';

export const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 100px 0;
  min-height: 70vh;
  align-items: center;

  div.goods {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;

export const LoadingPage = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;

  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

export const NothingFoundPage = styled(LoadingPage)`
  h3 {
    font-size: 45px;
    font-weight: bold;
  }
`;

export const StyledPagination = styled.div`
  margin-top: 70px;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 15px;
  }

  li {
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
  }

  li a {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
  }

  li.selected {
    background-color: lightgray;
  }

  ul li.disabled {
    opacity: 0.5;
  }
`;
