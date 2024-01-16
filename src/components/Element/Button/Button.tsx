import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

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
            <Button onClick={decrement} text="-" />
            <span>{quantity}</span>
            <Button onClick={increment} text="+" />
        </div>
    );
};