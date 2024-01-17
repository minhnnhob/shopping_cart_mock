
import React, { useState } from "react";
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


const CheckoutCart = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "fhdkkdfdkfjdkjfdkjf",
      price: 20,
      quantity: 1,
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 2,
      name: "Product 2",
      description: "fhdkkdfdkfjdkjfdkjf",
      price: 30,
      quantity: 1,
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 3,
      name: "Product 3",
      description: "fhdkkdfdkfjdkjfdkjf",
      price: 20,
      quantity: 1,
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 4,
      name: "Product 4",
      description: "fhdkkdfdkfjdkjfdkjf",
      price: 30,
      quantity: 1,
      image: "https://picsum.photos/200/300?grayscale",
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <StyledContainer>
      <StyledOrderContainer>
        <h3 style={{ textAlign: "left" }}>Order Info</h3>

        <SubtotalContainer>
          <SubtotalLeft>Subtotal: </SubtotalLeft>
          <SubtotalRight>$0</SubtotalRight>
        </SubtotalContainer>

        <ShoppingCostContainer>
          <p className="subleft">Shopping Cost: </p>
          <p className="subright">$0</p>
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
