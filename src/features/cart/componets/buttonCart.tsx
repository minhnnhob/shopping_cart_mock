// ButtonCart.js
import React from "react";
import { CheckoutButton, ContinueShoppingButton } from "./Cart.styled";

const ButtonCart = () => {
  const handleCheckout = () => {
    const shouldCheckout = window.confirm("Do you want to proceed with the checkout?");
    
    if (shouldCheckout) {
      // Add your logic for handling checkout here
      console.log("Checking out...");
    } else {
      console.log("Checkout canceled");
    }
  };

  const handleContinueShopping = () => {
    // Add your logic for continuing shopping here
    console.log("Continuing shopping...");
  };

  return (
    <div>
      <div>
        <CheckoutButton onClick={handleCheckout}>
          Checkout
        </CheckoutButton>
      </div>
      <div>
        <ContinueShoppingButton onClick={handleContinueShopping}>
          Continue Shopping
        </ContinueShoppingButton>
      </div>
    </div>
  );
};

export default ButtonCart;
