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

  div.SubNSearchBars {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 35px 0px 35px;
  }

  @media (max-width: 1340px) {
    div.SubNSearchBars {
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;

export const SubNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
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

export const SearchBar = styled.form`
  flex-shrink: 1;
  display: flex;
  padding-right: 35px;

  input {
    padding: 10px;
    font-size: 25px;
    border: none;
    background-color: rgb(232, 232, 232);
    border-radius: 15px 0 0 15px;
    flex-shrink: 1;
  }

  button {
    float: right;
    padding: 15px;
    background: #ddd;
    font-size: 20px;
    border: none;
    cursor: pointer;
    border-radius: 0 15px 15px 0;
    transition: 0.2s;
  }

  button:hover {
    background-color: #ccc;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    input {
      border-radius: 0px;
    }
    button {
      border-radius: 15px;
    }
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
    transition: 0.3s;
    cursor: pointer;
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
