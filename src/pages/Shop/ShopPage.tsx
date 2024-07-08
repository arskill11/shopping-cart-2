import { Outlet } from 'react-router-dom';
import { SearchBar, StyledShopPage } from './ShopPage.styles';
import { useRef, useState } from 'react';
export const ShopPage = () => {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSearch(searchRef.current ? searchRef.current.value : '');
  }

  return (
    <StyledShopPage>
      <div className="shop">
        <h2>SHOP</h2>
        <SearchBar>
          <input type="text" placeholder="Search..." ref={searchRef} />
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </SearchBar>
      </div>
      <Outlet context={search} />
    </StyledShopPage>
  );
};
