import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import ListCart from "../componets/listCart";
import CheckoutCart from "../componets/checkoutCart";
import ButtonCart from "../componets/buttonCart";
import { useState } from "react";
import {
  StyledShoppingCartRow,
  StyledShoppingCartContainer,
  StyledShoppingCartHeading,
  StyledShoppingCartContentWrapper,
  StyledRow,
} from "../componets/Cart.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";

export const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.item);
  const [cartS, setcartS] = useState(0);

  const calculateSubtotal = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.quantity * cartItem.product.price;
    });
    setcartS(total);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [cart]);

  const payload = {
    paySuccess: true,
    productsInOrder: cart.map((cartItem) => ({
      productId: cartItem.product.productId,
      quantity: cartItem.quantity,
    })),
  };

  return (
    <>
      <StyledShoppingCartRow>
        <Col md={12}>
          <StyledShoppingCartContainer>
            <StyledShoppingCartHeading>
              My Shopping Cart
            </StyledShoppingCartHeading>
            <StyledShoppingCartContentWrapper>
              <StyledRow>
                {cart.map((cartItem) => (
                  <ListCart
                    key={cartItem.product.productId}
                    cartItem={cartItem}
                    decrement={() => {}}
                    increment={() => {}}
                  />
                ))}
              </StyledRow>

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
