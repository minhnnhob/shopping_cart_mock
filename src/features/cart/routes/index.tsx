import React from 'react';
import { Col } from 'react-bootstrap';
import ListCart from '../componets/listCart';
import CheckoutCart from '../componets/checkoutCart';
import ButtonCart from '../componets/buttonCart';
import {
  StyledShoppingCartRow,
  StyledShoppingCartContainer,
  StyledShoppingCartHeading,
  StyledShoppingCartContentWrapper,
} from '../componets/Cart.styled';

export const ShoppingCart: React.FC = () => {
  return (
    <>
      <StyledShoppingCartRow>
        <Col md={12}>
          <StyledShoppingCartContainer>
            <StyledShoppingCartHeading>My Shopping Cart</StyledShoppingCartHeading>
            <StyledShoppingCartContentWrapper>
              <ListCart />
              <div>
                <CheckoutCart />
                <ButtonCart />
              </div>
            </StyledShoppingCartContentWrapper>
          </StyledShoppingCartContainer>
        </Col>
      </StyledShoppingCartRow>
    </>
  );
};
