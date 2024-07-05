import { BsCart4 } from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonContainer,
  LogoContainer,
  StyledNavbar,
  UserButtonsContainer,
} from './Navbar.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const cartProductsQuantity: number = useSelector(
    (state: RootState) => state.cartProducts.length,
  );
  const isAuthorized: boolean = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthorized) {
      navigate('/shop');
    }
  }, [isAuthorized]);

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
      <UserButtonsContainer>
        {isAuthorized ? (
          <>
            <Link to={'/cart'}>
              <LogoContainer>
                <Button>
                  <BsCart4 className="cartButton" />
                </Button>
                <p className="cartCount">{cartProductsQuantity}</p>
              </LogoContainer>
            </Link>
            <Button>
              <Link to={'/profile'}>Profile</Link>
            </Button>
          </>
        ) : (
          <>
            <Button>
              <NavLink to={'/auth/signup'}>SignUp</NavLink>
            </Button>
            <Button>
              <NavLink to={'/auth/login'}>Login</NavLink>
            </Button>
          </>
        )}
      </UserButtonsContainer>
    </StyledNavbar>
  );
};
