import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ListProduct from "../components/listProduct"; // Update the path as necessary
import ProductDetail from "../components/productDetail"; // Update the path as necessary
import { GetAllProduct } from '../api/getAllProduct'; // Update the path as necessary
import { Product } from '../interface/interface'; // Update the path as necessary

const RootRouter = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setProducts(result);
    };

    fetchData();
  }, []);

  // Mock function to simulate product selection
  const onProductSelect = (product: Product) => {
    console.log("Product selected", product);
  };

  // A wrapper component to handle fetching of the product based on the URL parameter
  const ProductDetailWrapper = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // You should replace this with actual logic to fetch the product based on the ID
    const fetchProduct = async (productId: string) => {
      // Replace with your actual fetch logic here
      console.log(`Fetch product with id: ${productId}`);
      // For demonstration, we're just setting a mock product
      setSelectedProduct({
        id: productId,
        productName: "Example Product",
        description: "This is a description",
        price: "100",
        imageUrl: "https://picsum.photos/200/300",
      });
    };

    useEffect(() => {
      if (id) {
        fetchProduct(id);
      }
    }, [id]);

    return (
      <div>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <p>Loading...</p> // Or any other loading state representation
        )}
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ListProduct onProductSelect={onProductSelect} />}
        />
        <Route path="/product/:id" element={<ProductDetailWrapper />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
