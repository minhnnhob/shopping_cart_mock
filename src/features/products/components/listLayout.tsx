// ListLayout.tsx

import React, { useEffect, useState } from "react";

import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../stores/cartSlice';


import 'react-toastify/dist/ReactToastify.css';
import { 
  ListLayoutWrapper, 
  SelectedProductContainer, 
  ProductImage, 
  ProductDetailsContainer, 
  PriceCartSection, 
  QuantitySection, 
  TotalPrice, 
  AddToCartButton, 
  ProductListContainer, 
  ProductItem, 
  ListImage, 
  ProductInfo, 
  ProductName, 
  ProductDescription, 
  PriceDetailSection, 
  ProductPrice, 
  DetailButton 
} from './ListLayoutStyles';

// Main component
const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetAllProduct();
        setData(result);
        if (result && result.length > 0) {
          setSelectedProduct(result[0]);
          setTotalPrice(Number(result[0].price));
        }
      } catch (error) {
        console.error("Error fetching product data:", error);

      }
    };

    fetchData();
  }, []);
  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log(`Added ${selectedProduct.productName} to the cart.`);
      dispatch(addToCart({ ...selectedProduct, iproductIdd: selectedProduct.iproductIdd, imageUrl: "https://picsum.photos/200/300" }));
      alert('Added to cart successfully!');
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      setTotalPrice(Number(selectedProduct.price) * quantity);
    }
  }, [quantity, selectedProduct]);

  const handleDetailClick = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };


  return (
    <ListLayoutWrapper>
      {selectedProduct && (
        <SelectedProductContainer>
          <ProductImage
            src={"https://picsum.photos/200/300"}
            alt={selectedProduct.productName}
          />
          <ProductDetailsContainer>
            <h2>{selectedProduct.productName}</h2>
            <p>{selectedProduct.description}</p>
            <PriceCartSection>
              <QuantitySection>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </QuantitySection>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TotalPrice style={{ marginRight: "1rem" }}>${totalPrice.toFixed(2)}</TotalPrice>
                <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>

              </div>

            </PriceCartSection>
          </ProductDetailsContainer>
        </SelectedProductContainer>

      )}

      <ProductListContainer>
        {data.map((product, index) => (
          <ProductItem key={index}>
            <ListImage
              src={"https://picsum.photos/200/300"}
              alt={product.productName}
            />
            <ProductInfo>
              <ProductName>{product.productName}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <PriceDetailSection>
                <ProductPrice>${product.price}</ProductPrice>
                <DetailButton onClick={() => handleDetailClick(product)}>Detail</DetailButton>
              </PriceDetailSection>
            </ProductInfo>
          </ProductItem>
        ))}
      </ProductListContainer>
    </ListLayoutWrapper>
  );
};

export default ListLayout;
