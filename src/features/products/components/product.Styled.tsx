// ProductStyles.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid white;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 10px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 13px;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPrice = styled.p`
  margin: 0;
  margin-right: 20px;
  font-weight: bold;
`;

export const DetailButton = styled.button`
  background-color: white;
  color: #3B82F6;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;


// ProductDetailStyles.js


export const ProductDetailContainer = styled.div`
  text-align: center;
`;

export const ProductImageStyled = styled.img`
  width: 35%;
  height: 60%;
  margin-top: 50px;

`;

export const ProductInfoStyled = styled.div`
`;


export const ProductTitleStyled = styled.h2`
display: flex;
font-size: 30px;
`;


export const ProductDescriptionStyled = styled.p`
display: flex;
margin-top:10px;
font-size: 15px;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const QuantityButtonStyled = styled.button`
  color: #FF7300;
  border: 1px solid #E5E7EB;
`;

export const TotalPriceStyled = styled.p`
  font-weight: bold;
  margin-left: 420px;
`;

export const AddToCartButtonStyled = styled.button`
  background-color: #3B82F6;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

//index route
// ProductsLayoutStyles.js


export const ProductsLayoutContainerStyled = styled.div`
  display: flex;
`;

export const ProductDetailContainerStyled = styled.div`
  width: 60%;
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin-left: 8%;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ListProductContainerStyled = styled.div`
  width: 40%;
  padding: 20px;
  margin-right: 7%;
`;
