import React from 'react';

interface QuantityButtonProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export const QuantityButton: React.FC<QuantityButtonProps> = ({ quantity, setQuantity }) => {
    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};