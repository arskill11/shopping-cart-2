import { Link, NavLink, Outlet } from 'react-router-dom';
import { StyledShopPage, SubNavbar } from './ShopPage.styles';

export const ShopPage = () => {
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
