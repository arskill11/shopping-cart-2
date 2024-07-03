import { BsCart4 } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { CartData } from '../../shared/types/types';
import {
  Button,
  ButtonContainer,
  LogoContainer,
  StyledNavbar,
} from './Navbar.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Navbar = () => {
  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  return (
    <StyledNavbar>
      <h1>FakeShop</h1>
      <ButtonContainer>
        <Button>
          <NavLink
            to={'/'}
            className={({ isActive }) => {
              return isActive ? 'active' : '';
            }}
          >
            Home
          </NavLink>
        </Button>
        <Button>
          <NavLink to={'/shop'}>Shop</NavLink>
        </Button>
      </ButtonContainer>
      <Link to={'/cart'}>
        <LogoContainer>
          <Button>
            <BsCart4 className="cartButton" />
          </Button>
          <p className="cartCount">{cartProducts.length}</p>
        </LogoContainer>
      </Link>
    </StyledNavbar>
  );
};
