import styled from 'styled-components';

export const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;

  div.shop {
    min-height: 15vh;
    font-size: 50px;
    gap: 20px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
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
    max-width: 600px;
    padding: 10px;
    font-size: 25px;
    border: none;
    background-color: white;
    border-radius: 15px 0 0 15px;
    flex-shrink: 1;
  }

  button {
    float: right;
    padding: 15px;
    background-color: darkgray;
    font-size: 20px;
    border: none;
    cursor: pointer;
    border-radius: 0 15px 15px 0;
    transition: 0.2s;
  }

  button:hover {
    background-color: gray;
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
