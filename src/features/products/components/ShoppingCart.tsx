// ShoppingCart.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 2, name: "Product 2",description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 3, name: "Product 3",description: "fhdkkdfdkfjdkjfdkjf", price: 20, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    { id: 4, name: "Product 4",description: "fhdkkdfdkfjdkjfdkjf", price: 30, quantity: 1, image: "https://picsum.photos/200/300?grayscale" },
    // Add more items as needed
  ]);

  const handleRemoveItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleIncrement = (itemId:number) => {
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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Row className="justify-content-center" style={{ paddingTop: "1rem" }}>
        <Col md={12}>
          <div
            className="bg-white p-3 mb-3 text-center"
            style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}
          >
            <h1 className="mt-3" style={{ backgroundColor: "white", borderRadius: "8px" }}>
              My Shopping Cart
            </h1>
          </div>
        </Col>
      </Row>

      <div style={{ display: "flex" }}>
        <Row style={{ marginLeft: "10rem", marginRight: "7.8rem" }}>
          {cartItems.map((item) => (
            <Col key={item.id} md={4} className="">
              <Card style={{padding:"1rem", width: "800px" }}>
              
                <Card.Body style={{ padding: "1rem", backgroundColor: "white", borderRadius: "8px" }}>
                <div style={{display:"flex"}}>
                <Card.Img src={item.image} style={{height:"100px", width:"200px"}}></Card.Img>
                  <div>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  </div>
                 
                  </div>

                  <div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                      className="mr-2"
                    >
                      Remove Item
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => handleIncrement(item.id)}
                      className="mr-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </Button>
                    <span className="ml-2">{item.quantity}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div>
          <div style={{ marginTop: "1rem", padding: "5rem", backgroundColor: "gray", borderRadius: "8px" }}>
            <h3>Order Info</h3>
            <h4>Subtotal: </h4>
            <h4>Shopping Cost: </h4>
            <h4>Total: ${calculateTotal()}</h4>
          </div>
          <div>
            <Button
              variant="primary"
              style={{ backgroundColor: "#3B82F6", color: "white", borderRadius: "5px" }}
            >
              Checkout
            </Button>
          </div>
          <div>
            <Button
              variant="primary"
              style={{ color: "#3B82F6", borderRadius: "5px" }}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCart;
