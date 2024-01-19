import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  StyledCol,
  StyledCard,
  StyledCardBody,
  ImageContainer,
  StyledImg,
  DetailsContainer,
  StyledTitle,
  StyledText,
  QuantityContainer,
  PriceContainer,
  StyledFontAwesomeIcon,
} from "./Cart.styled";

import { useDispatch, useSelector } from "react-redux";

import { QuantityButtonStyled } from "../../products/components/product.Styled";
import React, { useState } from "react";

//import { removeFromCart } from "../../../stores/cartSlice";
import { useEffect } from "react";
import { removeFromCart } from "../../../stores/cartSlice";
import { changeProductQuantity } from "../../../stores/cartSlice";

interface CartItemProps {
  cartItem: {
    quantity: number;
    product: {
      productId: string;
      imageUrl: string;
      productName: string;
      description: string;
      price: number;
    };
  };
  decrement: (id: string) => void;
  increment: (id: string) => void;
}

const ListCart: React.FC<CartItemProps> = ({
  cartItem,
  decrement,
  increment,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(cartItem.quantity);

  useEffect(() => {
    dispatch(changeProductQuantity({ ...cartItem, quantity: count }));
  }, [count, cartItem, dispatch]);

  const handleIncrement = () => {
    setCount(count + 1);
    increment(cartItem.product.productId);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      decrement(cartItem.product.productId);
    } else {
      const confirmed = window.confirm("you sure?");
      if (confirmed) {
        dispatch(removeFromCart(cartItem.product.productId));
      }
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cartItem.product.productId));
  };
  const totalPrice = (count * cartItem.product.price).toFixed(2);

  // The code is from a file named listCart.tsx in a React and TypeScript project, defining a ListCart component.
  // The ListCart component takes several props: cartItem (an object containing product details and quantity), decrement (a function to decrease the quantity of a product), and increment (a function to increase the quantity of a product).
  // The useDispatch hook from react-redux is used to get the dispatch function from the Redux store.
  // A state variable count is created using useState, initialized to the quantity of the cartItem.
  // The useEffect hook is used to dispatch the changeProductQuantity action whenever count changes. This action updates the quantity of the cartItem in the Redux store.
  // Three functions are defined: handleIncrement, handleDecrement, and handleRemove. handleIncrement increases the count and calls increment. handleDecrement decreases the count (if it's greater than 1) and calls decrement, or removes the item from the cart if count is 1 and the user confirms. handleRemove removes the item from the cart.
  // The total price for the cartItem is calculated by multiplying count by the product's price.

  return (
    <StyledCol key={cartItem.product.productId} md={4}>
      <StyledCard>
        <StyledCardBody>
          <ImageContainer>
            <StyledImg src={cartItem.product.imageUrl} />
            <DetailsContainer>
              <StyledTitle>{cartItem.product.productName}</StyledTitle>
              <StyledText>{cartItem.product.description}</StyledText>
              <div>
                <QuantityButtonStyled onClick={handleDecrement}>
                  -
                </QuantityButtonStyled>
                <span style={{ margin: "0 10px" }}>{count}</span>
                <QuantityButtonStyled onClick={handleIncrement}>
                  +
                </QuantityButtonStyled>
              </div>
              <QuantityContainer></QuantityContainer>
            </DetailsContainer>
          </ImageContainer>
          <PriceContainer>
            <StyledFontAwesomeIcon
              icon={faTrashAlt}
              onClick={() => handleRemove()}
            />
            <StyledText>${totalPrice}</StyledText>
          </PriceContainer>
        </StyledCardBody>
      </StyledCard>
    </StyledCol>
  );
};

export default ListCart;
