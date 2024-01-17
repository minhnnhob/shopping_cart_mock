// ProductDetail.js
import React, { useState, useEffect } from 'react';
import {
  ProductDetailContainer,
  ProductImageStyled,
  ProductInfoStyled,
  ProductTitleStyled,
  ProductDescriptionStyled,
  QuantityContainerStyled,
  QuantityButtonStyled,
  TotalPriceStyled,
  AddToCartButtonStyled,
} from './product.Styled';
import { Product } from '../interface/interface';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Number(product.price) * quantity);
  }, [quantity, product]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.productName}(s) to the cart.`);
    // Add the logic to add the product to the cart
  };

  if (!product) {
    return <div>No Product Selected</div>;
  }

  return (
    <ProductDetailContainer>
      <ProductImageStyled src="https://picsum.photos/200/300" alt={product.productName} />
      <ProductInfoStyled >
        <ProductTitleStyled>{product.productName}</ProductTitleStyled>
        <ProductDescriptionStyled >{product.description}</ProductDescriptionStyled>
        </ProductInfoStyled>
        <QuantityContainerStyled>
          <div style={{ display: "flex", alignItems: "center", backgroundColor:"#E5E7EB"}}>
            <QuantityButtonStyled onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} disabled={quantity <= 1}>-</QuantityButtonStyled>
            <span style={{ margin: "0 10px" }}>{quantity}</span>
            <QuantityButtonStyled onClick={() => setQuantity(quantity + 1)}>+</QuantityButtonStyled>
          </div>
          <TotalPriceStyled>${totalPrice.toFixed(2)}</TotalPriceStyled>
          <AddToCartButtonStyled onClick={handleAddToCart}>Add to Cart</AddToCartButtonStyled>
        </QuantityContainerStyled>
      
    </ProductDetailContainer>
  );
};

export default ProductDetail;
