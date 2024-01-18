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
  PriceContainer,
  StyledFontAwesomeIcon,
} from "./Cart.styled";

import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { useCartActions } from "../api/index";
//import { removeFromCart } from "../../../stores/cartSlice";

const ListCart = () => {
  const { handleRemove } = useCartActions(); // use the custom hook
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (itemId: string) => {
    handleRemove(itemId);
  };

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
                  <StyledTitle>{item.productName}</StyledTitle>
                  <StyledText>{item.description}</StyledText>
                  <QuantityContainer></QuantityContainer>
                </DetailsContainer>
              </ImageContainer>
              <PriceContainer>
                <StyledFontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleRemoveItem(item.productId)}
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
