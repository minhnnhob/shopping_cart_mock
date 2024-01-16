import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const ListCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 2, name: "Product 2", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 3, name: "Product 3", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
        { id: 4, name: "Product 4", description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },

    ]);

    const handleRemoveItem = (itemId: number) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const handleIncrement = (itemId: number) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    const handleDecrement = (itemId: number) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCart);
    };


    return (
        <Row>
            {cartItems.map((item) => (
                <Col key={item.id} md={4} className="">
                    <Card style={{ width: "800px", marginBottom: "24px" }}>

                        <Card.Body style={{ display: "flex", padding: "1rem", backgroundColor: "white", borderRadius: "8px" }}>
                            <div style={{ display: "flex" }}>
                                <Card.Img src={item.image} style={{ height: "100px", width: "200px" }}></Card.Img>
                                <div>
                                    <Card.Title style={{marginLeft:"2rem", fontSize:"20px", fontWeight:"bold"}}>{item.name}</Card.Title>
                                    <Card.Text style={{marginLeft:"2rem"}}>{item.description}</Card.Text>
                                    
                                    <div style={{marginLeft:"2rem"}}>

                                        <Button
                                            variant="success"
                                            onClick={() => handleIncrement(item.id)}
                                            className="mr-2"
                                        >
                                            +
                                        </Button>
                                        <span className="ml-2">{item.quantity}</span>
                                        <Button
                                            variant="warning"
                                            onClick={() => handleDecrement(item.id)}
                                        >
                                            -
                                        </Button>

                                    </div>
                                </div>
                            </div>

                            <div style={{ marginLeft: "auto" }}>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    style={{ color: "#de1717", cursor: "pointer" }}
                                    onClick={() => handleRemoveItem(item.id)}
                                />
                                <Card.Text> ${item.price}</Card.Text>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ListCart;