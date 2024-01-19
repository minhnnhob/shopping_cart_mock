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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import axios from "axios";
import { clearCart } from "../../../stores/cartSlice";
import { useNavigate } from "react-router";

export const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.item);
  const [cartS, setcartS] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // The code is from a file named index.tsx in a React and TypeScript project, defining a ShoppingCart component.
  // The useSelector hook from react-redux is used to access the cart state from the Redux store.
  // A state variable cartS is created using useState, initialized to 0, which is used to store the subtotal of the cart.
  // A function calculateSubtotal is defined to calculate the subtotal of the cart by iterating over each item in the cart, multiplying the quantity of each item by its price, and adding these values together. The result is then set as the new value of cartS.
  // The useEffect hook is used to call calculateSubtotal whenever the cart state changes.

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
