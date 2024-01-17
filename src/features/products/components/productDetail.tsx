import React, { useState, useEffect } from 'react';
import { Product } from '../interface/interface';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Number(product.price) * quantity);
  }, [quantity, product]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.productName}(s) to the cart.`);
    // Add the logic to add the product to the cart
  };

  if (!product) {
    return <div>No Product Selected</div>;
  }

  return (
    <div style={{  }}>
      <div>
        <img src={ "https://picsum.photos/200/300"} alt={product.productName} style={{ width: "30%", height: "30%", marginTop: "50px", marginLeft: "35%" }} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>{product.productName}</h2>
        <p>{product.description}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", backgroundColor:"#E5E7EB"}}>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} disabled={quantity <= 1} style={{color: "#FF7300", border:"1px solid #E5E7EB"}}>-</button>
            <span style={{ margin: "0 10px" }}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} style={{color: "#FF7300",border:"1px solid #E5E7EB"}}>+</button>
          </div>
          <p style={{ fontWeight: "bold", marginLeft:"420px" }}>${totalPrice.toFixed(2)}</p>
          <button onClick={handleAddToCart} style={{ backgroundColor: "#3B82F6", color: "#fff", padding: "10px 15px", border: "none", cursor: "pointer", borderRadius: "5px" }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;