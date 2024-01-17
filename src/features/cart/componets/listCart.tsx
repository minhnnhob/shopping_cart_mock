import  { useState } from "react";
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


const ListCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 2, name: "Product 2", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 3, name: "Product 3", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 4, name: "Product 4", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
  ]);

  const handleRemoveItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleIncrement = (itemId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecrement = (itemId: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <StyledRow>
      {cartItems.map((item) => (
        <StyledCol key={item.id} md={4}>
          <StyledCard>
            <StyledCardBody>
              <ImageContainer>
                <StyledImg src={item.image} />
                <DetailsContainer>
                  <StyledTitle>{item.name}</StyledTitle>
                  <StyledText>{item.description}</StyledText>
                  <QuantityContainer>
                    <QuantityButton onClick={() => handleDecrement(item.id)}>
                      -
                    </QuantityButton>
                    <span>{item.quantity}</span>
                    <QuantityButton onClick={() => handleIncrement(item.id)}>
                      +
                    </QuantityButton>
                  </QuantityContainer>
                </DetailsContainer>
              </ImageContainer>
              <PriceContainer>
                <StyledFontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleRemoveItem(item.id)}
                />
                <StyledText>${item.price}</StyledText>
              </PriceContainer>
            </StyledCardBody>
          </StyledCard>
        </StyledCol>
      ))}
    </StyledRow>
  );
};

export default ListCart;
