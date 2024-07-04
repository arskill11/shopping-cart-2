import { Outlet } from 'react-router-dom';
import { StyledShopPage } from './ShopPage.styles';
export const ShopPage = () => {
  return (
    <StyledShopPage>
      <div className="shop">
        <h2>SHOP</h2>
      </div>
      <Outlet />
    </StyledShopPage>
  );
};
