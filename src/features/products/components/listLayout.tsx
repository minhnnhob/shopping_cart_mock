import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";



export const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setData(result);
      if (result && result.length > 0) {
        setSelectedProduct(result[0]);
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${selectedProduct?.productName}(s) to the cart.`);
    // Implement the logic to add the selected product with the chosen quantity to the cart
    // You can use a state management solution like Redux or Context API for managing the cart state
    // For simplicity, you can log the details to the console for now.
  };

  return (

    <div style={{ display: "flex", backgroundColor: "white" }}>
      {selectedProduct && (
        <div style={{ width: "60%", padding: "20px", float: "left" }}>
          <div>
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "30%", height: "40%", marginTop: "100px", marginLeft: "40%" }}
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h2>{selectedProduct.productName}</h2>
            <p>{selectedProduct.description}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="quantity" style={{ marginRight: "10px" }}></label>
              <button onClick={handleDecrement} disabled={quantity === 1}>-</button>
              <span style={{ margin: "0 10px" }}>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
              <p style={{ marginLeft: "850px", fontWeight: "bold" }}>
                ${selectedProduct.price}
              </p>
              <button
                onClick={handleAddToCart}
                style={{ backgroundColor: " #3B82F6", color: "#fff", padding: "8px 12px", border: "none", cursor: "pointer", marginLeft: "100px", borderRadius:"10px" }}
              >
Add to Cart
              </button>
             
      


            </div>
          </div>
        </div>
      )}

      <div style={{ width: "35%", float: "right", padding: "20px" }}>
        {data.map((product, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "160px", height: "120px", marginBottom: "10px" }}
            />
            <p
              style={{
                margin: "0",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {product.productName}
            </p>
            <p style={{ margin: "0", marginBottom: "10px" }}>
              {product.description}
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  margin: "0",
                  marginRight: "20px",
                  fontWeight: "bold",
                }}
              >
                ${product.price}
              </p>
              <button
                onClick={() => handleDetailClick(product)}
                style={{
                  padding: "5px 8px",
                  cursor: "pointer",
                  marginLeft: "600px"
                }}
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
