import { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  StyledRow,
  StyledCol,
  StyledCard,
  StyledCardBody,
  ImageContainer,
  StyledImg,
  DetailsContainer,
  StyledTitle,
  StyledText,
  QuantityContainer,
  QuantityButton,
  PriceContainer,
  StyledFontAwesomeIcon,
} from "./Cart.styled";

import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { useCartActions } from "../api/index";

const ListCart = () => {
  const { handleRemove } = useCartActions(); // use the custom hook
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (itemId: string) => {
    handleRemove(itemId);
  };

  // const handleIncrement = (itemId: number) => {
  //   const updatedCart = cartItems.map((item) =>
  //     item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setCartItems(updatedCart);
  // };

  // const handleDecrement = (itemId: number) => {
  //   const updatedCart = cartItems.map((item) =>
  //     item.id === itemId && item.quantity > 1
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   setCartItems(updatedCart);
  // };

  if (cartItems.length === 0) {
    return <p>There are 0 products in the cart.</p>;
  }
  return (
    <StyledRow>
      {cartItems.map((item) => (
        <StyledCol key={item.productId} md={4}>
          <StyledCard>
            <StyledCardBody>
              <ImageContainer>
                <StyledImg src={item.imageUrl} />
                <DetailsContainer>
                  <StyledTitle>{item.imageUrl}</StyledTitle>
                  <StyledText>{item.description}</StyledText>
                  <QuantityContainer>
                    {/* <QuantityButton onClick={() => handleDecrement(item.productId)}>
                      -
                    </QuantityButton> */}
                    {/* <span>{item.quantity}</span> */}
                    {/* <QuantityButton onClick={() => handleIncrement(item.productId)}>
                      +
                    </QuantityButton> */}
                  </QuantityContainer>
                </DetailsContainer>
              </ImageContainer>
              <PriceContainer>
                {/* <StyledFontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleRemoveItem(item.id)}
                /> */}
                <StyledText>${item.price}</StyledText>
              </PriceContainer>
            </StyledCardBody>
          </StyledCard>
        </StyledCol>
      ))}
    </StyledRow>
  );
};
//hehe

export default ListCart;
