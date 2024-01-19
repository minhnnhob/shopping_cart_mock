// ListProduct.js
import React, { useEffect, useState } from 'react';
import { GetAllProduct } from '../api/getAllProduct';
import { IProduct } from '../interface/interface';
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
  onProductSelect: (product: IProduct) => void;
}

export const ListProduct = ({ onProductSelect }: ListProductProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setProducts(result);
    };

    fetchData();
  }, []);
  // The code is from a file named listProduct.tsx in a React and TypeScript project, defining a ListProduct component.
  // The ListProduct component takes a single prop: onProductSelect, which is a function that takes a product of type IProduct as an argument.
  // A state variable products is created using useState, initialized as an empty array of IProduct.
  // The useEffect hook is used to fetch product data when the component mounts. Inside this hook, an asynchronous function fetchData is defined and immediately invoked.
  // The fetchData function calls GetAllProduct (presumably a function that fetches product data from an API), and the result is used to update the products state.
  
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
