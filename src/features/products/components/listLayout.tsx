// ListLayout.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";


// Styled components
const ListLayoutWrapper = styled.div`
  display: flex;
  background-color: #e5e7eb;
  height: 800px;
`;

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 20px;
  
`;

const SelectedProductContainer = styled(Container)`
  width: 63%;
  margin-left: 5%;
  max-height: 600px;
  overflow: auto;
`;

const ProductImage = styled.img`
width: 40%;
height: 60%;
margin-top: 50px;
margin-left: 35%;
display: flex;
align-items: center;
justify-content: center;
`;

const ProductDetailsContainer = styled.div`
  margin-left: 20px;
  
`;

const PriceCartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const QuantitySection = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 5px;
  }
`;

const TotalPrice = styled.p`
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

const ProductListContainer = styled(Container)`
  width: 40%;
  margin-right: 5%;
  overflow: auto;
  background-color: #E5E7EB;
  margin-top:1px;
  
`;

const ProductItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd; // Changed to a light grey color for visibility
  background-color: white; // Slightly different background color for contrast
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
`;


const ListImage = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
`;

const ProductName = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 13px;
`;

const PriceDetailSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.p`
  margin: 0;
  margin-right: 20px;
  font-weight: bold;
`;

const DetailButton = styled.button`
  background-color: white;
  color: #3b82f6;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

// Main component
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
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <TotalPrice style={{marginRight:"1rem"}}>${totalPrice.toFixed(2)}</TotalPrice>
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
              src={ "https://picsum.photos/200/300"}
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
