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
    let subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return subtotal.toFixed(2);
  };

  const calculateTotal = () => {
    let total = Number(calculateSubtotal());
    let shippingCost = cartItems.length > 0 ? 10 : 0;
    total += shippingCost;
    return total.toFixed(2);
  };

// The CheckoutCart component is defined. This is a functional component in React.
// The useSelector hook from Redux is used to access the cart.item state from the Redux store. This state is assigned to the cartItems variable.
// The calculateSubtotal function is defined. This function calculates the subtotal of the items in the cart.
// It uses the reduce method to iterate over each item in cartItems.
// For each item, it multiplies the item's price by its quantity and adds that to the total.
// The reduce method returns the total, which is assigned to subtotal.
// The toFixed(2) method is used to round subtotal to two decimal places.
// The calculateTotal function is defined. This function calculates the total cost of the items in the cart, including the shipping cost.
// It initializes total to the subtotal by calling calculateSubtotal and converting the result to a number.
// It checks if there are any items in the cart. If there are, it sets shippingCost to 10. If there are no items in the cart, it sets shippingCost to 0.
// It adds shippingCost to total.
// The toFixed(2) method is used to round total to two decimal places.

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
