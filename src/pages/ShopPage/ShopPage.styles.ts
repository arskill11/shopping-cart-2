import styled from 'styled-components';

export const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;

  div.shop {
    min-height: 15vh;
    font-size: 50px;
    background-color: lightgray;
  }

  div.shop > h2 {
    padding-top: 30px;
    text-align: center;
  }
`;

export const SubNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 35px 35px 0px 35px;
  font-size: 30px;
  gap: 30px;
  min-height: 10vh;

  a {
    text-decoration: none;
    color: black;
  }

  a.active {
    font-size: 1.7rem;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const SortingBar = styled.div`
  padding: 10px 35px;
  font-size: 25px;
  display: flex;
  gap: 40px;
  align-items: center;

  div.sortParameterButtons,
  div.sortCriteriaButtons {
    display: flex;
    gap: 15px;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    padding: 6px;
    border-radius: 15px;
  }

  button.sortParameter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: lightgray;
  }

  button.sortParameter.active,
  button.sortButton.active {
    background-color: lightgray;
    font-weight: bold;
  }
`;
