import React from "react";
import {
  StyledContainer,
  StyledOrderContainer,
  SubtotalContainer,
  SubtotalLeft,
  SubtotalRight,
  ShoppingCostContainer,
  TotalContainer,
  TotalHeading,
  TotalAmount,
} from "./Cart.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";

const CheckoutCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.item);
  const calculateSubtotal = () => {
    let subtotal = cartItems.reduce((total, item) => total + item.quantity, 0);
    return subtotal.toFixed(0);
  };

  const calculateTotal = () => {
    let total = Number(calculateSubtotal());
    if (cartItems.length > 0) {
      cartItems.forEach(
        (item) => (total = item.product.price * item.quantity + 10)
      );
    }
    return total.toFixed(2);
  };

  return (
    <StyledContainer>
      <StyledOrderContainer>
        <h3 style={{ textAlign: "left" }}>Order Info</h3>

        <SubtotalContainer>
          <SubtotalLeft>Subtotal: </SubtotalLeft>
          <SubtotalRight>{calculateSubtotal()}</SubtotalRight>
        </SubtotalContainer>

        <ShoppingCostContainer>
          {cartItems.length > 0 ? (
            <>
              <p className="subleft">Shipping Cost: </p>
              <p className="subright">$10</p>
            </>
          ) : (
            <>
              <p className="subleft">Shipping Cost: </p>
              <p className="subright">$0</p>
            </>
          )}
        </ShoppingCostContainer>

        <TotalContainer>
          <TotalHeading>Total: </TotalHeading>
          <TotalAmount>${calculateTotal()}</TotalAmount>
        </TotalContainer>
      </StyledOrderContainer>
    </StyledContainer>
  );
};

export default CheckoutCart;
