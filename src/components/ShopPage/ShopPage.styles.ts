import styled from 'styled-components';

export const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  div.shop {
    height: 30vh;
    font-size: 50px;
    background-color: lightgray;
  }

  div.shop > h2 {
    position: relative;
    top: 50%;
    left: 45%;
  }
`;

export const SubNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 35px;
  font-size: 30px;
  gap: 30px;
  height: 10vh;

  a {
    text-decoration: none;
    color: black;
  }

  a.active {
    font-size: 1.7rem;
    font-weight: bold;
  }
`;
