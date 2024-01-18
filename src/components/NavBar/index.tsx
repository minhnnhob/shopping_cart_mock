import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import {
  Container,
  NavLinksContainer,
  NavLinkStyled,
  Logo,
  CartIconContainer,
  CartIcon,
  CartItemCount,
} from './NavBar.Styled';

const NavBar: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <Container>
      <NavLinksContainer>
        <NavLinkStyled isActive={false} to="/home">
          Home
        </NavLinkStyled>
        <NavLinkStyled isActive={false} to="/products">
          Products
        </NavLinkStyled>
        <NavLinkStyled isActive={false} to="/review">
          Review
        </NavLinkStyled>
      </NavLinksContainer>

      <Logo>Beauty.bd</Logo>

      <NavLinkStyled isActive={false} to="/cart" style={{ textDecoration: 'none' }}>
        <CartIconContainer>
          <CartIcon className="ri-shopping-cart-2-fill" />
          {cartItemCount > 0 && <CartItemCount>{cartItemCount}</CartItemCount>}
        </CartIconContainer>
      </NavLinkStyled>
    </Container>
  );
};

export default NavBar;
