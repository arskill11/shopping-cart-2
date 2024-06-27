import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  SearchBar,
  SortingBar,
  StyledShopPage,
  SubNavbar,
} from './ShopPage.styles';
import { useRef, useState } from 'react';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { SortCriteria, SortParameters } from '../../shared/types/types';

export const ShopPage = () => {
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>(null);
  const [sortParameter, setSortParameter] = useState<SortParameters>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setInputValue(inputRef.current ? inputRef.current.value : '');
  }

  function clearInput() {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <StyledShopPage>
      <div className="shop">
        <h2>SHOP</h2>
      </div>
      <div className="SubNSearchBars">
        <SubNavbar>
          <Link to={'/shop'}>All</Link>
          <NavLink
            to={"/shop/category/women's clothing"}
            className={({ isActive }) => {
              return isActive ? 'active' : '';
            }}
            onClick={clearInput}
          >
            Women's clothing
          </NavLink>
          <NavLink to={"/shop/category/men's clothing"} onClick={clearInput}>
            Men's clothing
          </NavLink>
          <NavLink to={'/shop/category/jewelery'} onClick={clearInput}>
            Jewelery
          </NavLink>
          <NavLink to={'/shop/category/electronics'} onClick={clearInput}>
            Electronics
          </NavLink>
        </SubNavbar>
        <SearchBar>
          <input type="text" placeholder="Search..." ref={inputRef} />
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </SearchBar>
      </div>
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
      <Outlet context={[sortCriteria, sortParameter, inputValue]} />
    </StyledShopPage>
  );
};
