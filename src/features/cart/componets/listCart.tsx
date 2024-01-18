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
