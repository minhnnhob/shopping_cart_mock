import React, { useEffect, useState } from 'react';
import { GetAllProduct } from '../api/getAllProduct';
import { Product } from '../interface/interface';


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
    <div style={{ width: "40%", padding: "20px", marginRight: "5%" }}>
      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid white", backgroundColor: "white", borderRadius: "8px", padding: "10px", display: "flex", alignItems: "center" }}>
          <img src="https://picsum.photos/200/300" alt={product.productName} style={{ width: "120px", height: "80px", marginRight: "10px" }} />
          <div style={{ display: "flex", flexDirection: "column", flex: 1, marginRight: "10px" }}>
            <p style={{ margin: "0", fontSize: "15px", fontWeight: "bold" }}>{product.productName}</p>
            <p style={{ margin: "0", marginBottom: "10px", fontSize: "13px" }}>{product.description}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "0", marginRight: "20px", fontWeight: "bold" }}>${product.price}</p>
              <button onClick={() => onProductSelect(product)} style={{ backgroundColor: "white", color: "#3B82F6", padding: "5px 8px", border: "none", cursor: "pointer", marginLeft: "auto" }}>
                Detail
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
