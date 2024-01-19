import styled from "styled-components";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mobileBreakpoint = '576px';
const tabletBreakpoint = '768px';

//checkoutCart.tsx
export const StyledContainer = styled.div`
  width: 360px;
  background-color: rgba(243, 244, 246, 1);
  border-radius: 8px;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const StyledOrderContainer = styled.div`
  padding: 10px 20px;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 2px;
`;

export const SubtotalLeft = styled.p`
  margin: 0;
`;

export const SubtotalRight = styled.p`
  margin: 0;
`;

export const ShoppingCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalHeading = styled.h2`
  margin: 0;
`;

export const TotalAmount = styled.h2`
  margin: 0;
`;

//listCart.tsx
export const StyledRow = styled(Row)`
  margin-left: -12px;
  margin-right: -12px;
`;

export const StyledCol = styled(Col)`
  padding: 0 12px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const StyledCardBody = styled(Card.Body)`
  display: flex;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const StyledImg = styled(Card.Img)`
  height: 100px;
  width: 200px;
`;

export const DetailsContainer = styled.div`
  margin-left: 2rem;
`;

export const StyledTitle = styled(Card.Title)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const StyledText = styled(Card.Text)`
  margin-bottom: 1rem;
`;

export const QuantityContainer = styled.div`
  margin-left: 2rem;
  display: flex;
`;

export const QuantityButton = styled.button`
  margin-right: 2px;
  color: #FF7300;
  border: 1px solid #E5E7EB;
`;

export const PriceContainer = styled.div`
  margin-left: auto;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #de1717;
  cursor: pointer;
`;

export const StyledPlus = styled.div`
  display: flex;
  align-items: center;
  background-color: #E5E7EB;
`;

export const StyledSpace = styled.span`
  margin: 0 10px;
`;

//buttonCart.tsx
export const CheckoutButton = styled.button`
  margin-top: 10px;
  width: 360px;
  height: 36px;
  background-color: #3B82F6;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

export const ContinueShoppingButton = styled.button`
  margin-top: 10px;
  width: 360px;
  height: 36px;
  color: #3B82F6;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
  }
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

//index.tsx
export const StyledShoppingCartRow = styled(Row)`
  justify-content: center;
  padding-top: 1rem;

  @media (max-width: ${tabletBreakpoint}) {
    padding-top: 0.5rem;
  }
`;

export const StyledShoppingCartContainer = styled(Container)`
  max-width: 1200px;
  margin: auto;
  height: 42.3rem;

  @media (max-width: ${tabletBreakpoint}) {
    padding: 0 10px;
  }
  @media (max-width: ${mobileBreakpoint}) {
    padding: 0 10px;
  }
`;

export const StyledShoppingCartHeading = styled.h1`
  margin-top: 12px;
  padding-top: 12px;
  height: 36px;
  text-align: center;
  font-size: 16px;
  background-color: white;
  border-radius: 8px;

  @media (max-width: ${tabletBreakpoint}) {
    margin-top: 0;
  }
  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 0;
  }
`;

export const StyledShoppingCartContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${tabletBreakpoint}) {
    flex-direction: column;
  }
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;