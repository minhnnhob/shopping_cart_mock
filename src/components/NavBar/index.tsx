import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import {
  Container,
  NavLinksContainer,
  NavLinkStyled,
  Logo,
  CartIconContainer,
  CartIcon,
  CartItemCount,
} from "./NavBar.Styled";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const NavBar: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.item.length);

  return (
    <Container>
      <Dropdown className="d-md-none">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/products">Products</Dropdown.Item>
          <Dropdown.Item href="/review">Review</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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

      <NavLinkStyled
        isActive={false}
        to="/cart"
        style={{ textDecoration: "none" }}
      >
        <CartIconContainer>
          <CartIcon className="ri-shopping-cart-2-fill" />
          {cartItemCount > 0 && <CartItemCount>{cartItemCount}</CartItemCount>}
        </CartIconContainer>
      </NavLinkStyled>
    </Container>
  );
};

export default NavBar;
