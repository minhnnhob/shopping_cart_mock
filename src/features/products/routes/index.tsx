import React, { useState, useEffect } from "react";
import { Route, Router, Routes, useParams, useRoutes } from "react-router-dom";
import ListProduct from "../components/listProduct"; // Update the path as necessary
import ProductDetail from "../components/productDetail"; // Update the path as necessary
import { GetAllProduct } from "../api/getAllProduct"; // Update the path as necessary
import { Product } from "../interface/interface"; // Update the path as necessary

export const ProductsLayout = () => {
  const [product, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setProducts(result);
    };

    fetchData();
  }, []);

  // Mock function to simulate product selection
  const onProductSelect = (product: Product) => {
    console.log(`Selected product: ${product.productName}`);
    setSelectedProduct(product);
  };

  // A wrapper component to handle fetching of the product based on the URL parameter
  const ProductDetailWrapper = () => {
    const { id } = useParams<{ id: string }>();
    // const [selectedProduct, setSelectedProduct] = useState<Product>(product[0]);

    // You should replace this with actual logic to fetch the product based on the ID
    const fetchProduct = async (productId: string) => {
      try {
        const response = await fetch(
          `https://your-api-url/products/${productId}`
        );
        const product = await response.json();

        setSelectedProduct({
          productId: product.id,
          productName: product.name,
          description: product.description,
          price: product.price,
          imageUrl: "https://picsum.photos/200/300",
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
    }, [id, selectedProduct]);

    return (
      <div>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <>
            <ProductDetail
              product={{
                productId: "1",
                productName: "Product 1",
                description: "This is product 1",
                price: "100",
                imageUrl: "https://picsum.photos/200/300",
              }}
            />
          </> // Or any other loading state representation
        )}
      </div>
    );
  };

  let routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <div style={{ display: "flex" }}>
            <ProductDetailWrapper />
            <ListProduct onProductSelect={onProductSelect} />
          </div>
        </>
      ),
    },
    {
      path: ":productId",
      element: (
        <>
          <div style={{ display: "flex" }}>
            <ProductDetailWrapper />
            <ListProduct onProductSelect={onProductSelect} />
          </div>
        </>
      ),
    },
  ]);

  return routes;
  // <Routes>
  //   <Route
  //     path="/"
  //     element={<ListProduct onProductSelect={onProductSelect} />}
  //   />
  //   <Route path="/product/:id" element={<ProductDetailWrapper />} />
  // </Routes>
};
