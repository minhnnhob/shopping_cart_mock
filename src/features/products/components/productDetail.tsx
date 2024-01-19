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
  // The code is from a file named productDetail.tsx in a React and TypeScript project, defining a ProductDetail component.
  // The ProductDetail component takes a single prop: product of type IProduct.
  // Two state variables are created using useState: quantity (initialized to 1) and totalPrice (initialized to the product's price).
  // The useDispatch hook from react-redux is used to get the dispatch function from the Redux store.
  // A reference preProduct is created using useRef to hold the previous product.
  // Two useEffect hooks are used: one to reset the quantity and total price when a new product is selected, and another to update the total price when the quantity or product changes.
  // A handleAddToCart function is defined to dispatch the addToCart action with the current product and quantity.
  // If no product is provided, the component renders a div with the text "No Product Selected".
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
