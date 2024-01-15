import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";

export const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setData(result);
      if (result && result.length > 0) {
        setSelectedProduct(result[0]); // Set the first product as the selected product
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ display: "flex", backgroundColor:"white" }}>
      {selectedProduct && (
        <div style={{ width: "60%", padding: "20px", float: "left" }}>
          <img
            src="https://picsum.photos/200/300"
            alt=""
            style={{ width: "30%",height:"40%", marginTop: "100px", marginLeft: "40%" }} 
          />
          <h2 style={{ marginTop: "40px", marginLeft:"80px" }}>{selectedProduct.productName}</h2>
          <p style={{ marginTop: "40px", marginLeft:"80px" }}>{selectedProduct.description}</p>
          {/* Add more details as needed */}
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
              alignItems: "center",
            }}
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "160px", height: "120px", marginRight: "10px" }}
            />
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
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
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "5px 8px",
                    border: "none",
                    cursor: "pointer",
                    marginRight: "100px",
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
