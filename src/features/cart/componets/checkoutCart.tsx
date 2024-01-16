import React, { useState } from "react";


const CheckoutCart = () => {
    const [cartItems] = useState([
        { id: 1, name: "Product 1", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 2, name: "Product 2", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 3, name: "Product 3", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 4, name: "Product 4", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },

    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <div style={{ width: "360px", backgroundColor: " rgba(243,244,246,1)", borderRadius: "8px" }}>
                <div className="container-order" style={{ padding: "10px 20px" }}>
                    <h3 style={{ textAlign: "left" }}>Order Info </h3>

                    <div style={{ display: "flex", justifyContent: "space-between", rowGap: "2px" }}>
                        <p className="subleft" style={{}}>Subtotal: </p>
                        <p className="subright">$0</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p className="subleft">Shopping Cost: </p>
                        <p className="subright">$0</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Total: </h2>
                        <h2> ${calculateTotal()}</h2>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default CheckoutCart;