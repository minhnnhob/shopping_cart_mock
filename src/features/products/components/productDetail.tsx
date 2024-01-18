import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../stores/cartSlice"; // Import the 'changeQuantity' action
import // ... your styled components
"./product.Styled";
import { IProduct } from "../interface/interface";
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
} from "./product.Styled";
import { AppDispatch } from "../../../stores/store";

interface ProductDetailProps {
  product: IProduct;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const dispatch = useDispatch<AppDispatch>();
  const preProduct = useRef<IProduct | null>(null);

  useEffect(() => {
    if (
      preProduct.current &&
      product.productId !== preProduct.current.productId
    ) {
      setQuantity(1);
      setTotalPrice(product.price);
    }
    preProduct.current = product;
  }, [product]);

  useEffect(() => {
    setTotalPrice(product.price * quantity);
  }, [quantity, product]);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: quantity }));
  };

  if (!product) {
    return <div>No Product Selected</div>;
  }

  return (
    <ProductDetailContainer>
      <ProductImageStyled src={product.imageUrl} />
      <ProductInfoStyled>
        <ProductTitleStyled>{product.productName}</ProductTitleStyled>
        <ProductDescriptionStyled>
          {product.description}
        </ProductDescriptionStyled>
      </ProductInfoStyled>
      <QuantityContainerStyled>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E5E7EB",
          }}
        >
          <QuantityButtonStyled
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            disabled={quantity <= 1}
          >
            -
          </QuantityButtonStyled>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <QuantityButtonStyled onClick={() => setQuantity(quantity + 1)}>
            +
          </QuantityButtonStyled>
        </div>
        <TotalPriceStyled>${totalPrice.toFixed(2)}</TotalPriceStyled>
        <AddToCartButtonStyled onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButtonStyled>
      </QuantityContainerStyled>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
