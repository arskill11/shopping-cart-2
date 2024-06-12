import styled from 'styled-components';
import { PropsAPI } from '../types';
import { Link, NavLink, Outlet, useOutletContext } from 'react-router-dom';

const StyledShopPage = styled.div`
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

const SubNavbar = styled.nav`
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

const ShopPage = () => {
  return (
    <StyledShopPage>
      <div className="shop">
        <h2>SHOP</h2>
      </div>
      <SubNavbar>
        <Link to={'/shop'}>All</Link>
        <NavLink
          to={"/shop/category/women's clothing"}
          className={({ isActive }) => {
            return isActive ? 'active' : '';
          }}
        >
          Women's clothing
        </NavLink>
        <NavLink to={"/shop/category/men's clothing"}>Men's clothing</NavLink>
        <NavLink to={'/shop/category/jewelery'}>Jewelery</NavLink>
        <NavLink to={'/shop/category/electronics'}>Electronics</NavLink>
      </SubNavbar>
      <Outlet />
    </StyledShopPage>
  );
};

export default ShopPage;
