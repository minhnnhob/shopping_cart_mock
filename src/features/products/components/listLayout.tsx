import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";
import { Button } from 'react-bootstrap';


export const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setData(result);
      if (result && result.length > 0) {
        setSelectedProduct(result[0]);
        setTotalPrice(Number(result[0].price));
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
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${selectedProduct?.productName}(s) to the cart.`);
    // Implement the logic to add the selected product with the chosen quantity to the cart
    // You can use a state management solution like Redux or Context API for managing the cart state
    // For simplicity, you can log the details to the console for now.
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#E5E7EB", height: "700px" }}>
      {selectedProduct && (
        <div style={{
          width: "63%",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          margin: "20px",
          marginLeft: "5%",
          maxHeight: "600px", 
        }}>
          <div>
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "30%", height: "40%", marginTop: "50px", marginLeft: "40%" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
            <h2>{selectedProduct.productName}</h2>
            <p>{selectedProduct.description}</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
              {/* Quantity Buttons and Quantity Display */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} disabled={quantity <= 1} style={{ marginRight: "5px" }}>-</Button>
                <span style={{ margin: "0 5px" }}>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)} style={{ marginLeft: "5px" }}>+</Button>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold" }}>
                  ${totalPrice}
                </p>

                <Button variant="primary " onClick={handleAddToCart}
                  style={{ backgroundColor: " #3B82F6", color: "#fff", padding: "8px 12px", border: "none", cursor: "pointer", marginLeft: "750px", borderRadius: "8px", position: "fixed" }}>  Add to Cart</Button>


              </div>

            </div>

          </div>
        </div>
      )}

      <div style={{
        width: "40%",
        padding: "20px",
        marginRight: "5%",




      }}>
        {data.map((product, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              border: "1px solid white",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "120px", height: "80px", marginRight: "10px" }}
            />
            <div style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              marginRight: "10px" // Added to prevent text from touching the Detail button
            }}>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: "bold" }}>
                {product.productName}
              </p>
              <p style={{ margin: "0", marginBottom: "10px", fontSize: "13px" }}>
                {product.description}
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0", marginRight: "20px", fontWeight: "bold" }}>
                  ${product.price}
                </p>
                <button
                  onClick={() => handleDetailClick(product)}
                  style={{
                    backgroundColor: "white",
                    color: "#3B82F6",
                    padding: "5px 8px",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "auto", // Changed to auto to push the button to the far right
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
