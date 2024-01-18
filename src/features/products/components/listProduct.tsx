// ListProduct.js
import React, { useEffect, useState } from 'react';
import { GetAllProduct } from '../api/getAllProduct';
import { Product } from '../interface/interface';
import {
  ProductContainer,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductDescription,
  ProductPriceContainer,
  ProductPrice,
  DetailButton,
} from './product.Styled';

interface ListProductProps {
  onProductSelect: (product: Product) => void;
}

export const ListProduct = ({ onProductSelect }: ListProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setProducts(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <ProductImage src={product.imageUrl} />
          <ProductInfoContainer>
            <ProductName>{product.productName}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPriceContainer>
              <ProductPrice>${product.price}</ProductPrice>
              <DetailButton onClick={() => onProductSelect(product)}>
                Detail
              </DetailButton>
            </ProductPriceContainer>
          </ProductInfoContainer>
        </ProductContainer>
      ))}
    </div>
  );
};

export default ListProduct;
