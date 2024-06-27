import { Link, NavLink, Outlet } from 'react-router-dom';
import { SortingBar, StyledShopPage, SubNavbar } from './ShopPage.styles';
import { useState } from 'react';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { SortCriteria, SortParameters } from '../../shared/types/types';

export const ShopPage = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>(null);
  const [sortParameter, setSortParameter] = useState<SortParameters>(null);

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
      <SortingBar>
        <p>Sort by: </p>
        <div className="sortCriteriaButtons">
          <button
            className={
              sortCriteria === 'price' ? 'sortButton active' : 'sortButton'
            }
            onClick={() => setSortCriteria('price')}
          >
            Price
          </button>
          <button
            className={
              sortCriteria === 'rate' ? 'sortButton active' : 'sortButton'
            }
            onClick={() => setSortCriteria('rate')}
          >
            Rating
          </button>
        </div>
        <div className="sortParameterButtons">
          <button
            className={
              sortParameter === 'descending'
                ? 'sortParameter active'
                : 'sortParameter'
            }
            onClick={() => setSortParameter('descending')}
          >
            <HiSortDescending />
          </button>
          <button
            className={
              sortParameter === 'ascending'
                ? 'sortParameter active'
                : 'sortParameter'
            }
            onClick={() => setSortParameter('ascending')}
          >
            <HiSortAscending />
          </button>
        </div>
      </SortingBar>
      <Outlet context={[sortCriteria, sortParameter]} />
    </StyledShopPage>
  );
};
