import React, { useState, useEffect } from "react";
import { useParams, useRoutes } from "react-router-dom";
import ListProduct from "../components/listProduct"; // Adjust the path as necessary
import ProductDetail from "../components/productDetail"; // Adjust the path as necessary
import { GetAllProduct } from "../api/getAllProduct"; // Adjust the path as necessary
import { IProduct } from "../interface/interface"; // Adjust the path as necessary
import {
  ProductsLayoutContainerStyled,
  ProductDetailContainerStyled,
  ListProductContainerStyled,
} from "../components/product.Styled";

export const ProductsLayout = () => {
  const [product, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setProducts(result);
    };

    fetchData();
  }, []);

  const onProductSelect = (product: IProduct) => {
    console.log(`Selected product: ${product.productName}`);
    setSelectedProduct(product);
  };

  const ProductDetailWrapper = () => {
    const { id } = useParams<{ id: string }>();

    const fetchProduct = async (productId: string) => {
      try {
        const response = await fetch(
          `https://your-api-url/products/${productId}`
        );
        const product = await response.json();
        console.log(`Fetched product with id: ${productId}`, product);

        setSelectedProduct({
          productId: product.id,
          productName: product.name,
          description: product.description,
          price: product.price,
          imageUrl: product.imageUrl,
        });
      } catch (error) {
        console.error(`Failed to fetch product with id: ${productId}`, error);
      }
    };

    useEffect(() => {
      if (id) {
        fetchProduct(id);
      } else if (selectedProduct) {
        setSelectedProduct(selectedProduct);
      }
    }, [id]);

    return (
      <ProductDetailContainerStyled>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <p>No product selected</p>
        )}
      </ProductDetailContainerStyled>
    );
  };

  let routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <ProductsLayoutContainerStyled>
            <ProductDetailWrapper />
            <ListProductContainerStyled>
              <ListProduct onProductSelect={onProductSelect} />
            </ListProductContainerStyled>
          </ProductsLayoutContainerStyled>
        </>
      ),
    },
    {
      path: ":productId",
      element: (
        <>
          <ProductsLayoutContainerStyled>
            <ProductDetailWrapper />
            <ListProductContainerStyled>
              <ListProduct onProductSelect={onProductSelect} />
            </ListProductContainerStyled>
          </ProductsLayoutContainerStyled>
        </>
      ),
    },
  ]);

  return routes;
};
