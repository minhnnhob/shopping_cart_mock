import React, { useEffect, useState } from "react";
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
} from './StyledComponents';
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";

const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
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
        // Handle error gracefully, e.g., show a message to the user
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      setTotalPrice(Number(selectedProduct.price) * quantity);
    }
  }, [quantity, selectedProduct]);

  const handleDetailClick = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log(`Added ${quantity} ${selectedProduct.productName}(s) to the cart.`);
      // Add to cart logic here
    }
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
              <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
              <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
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
