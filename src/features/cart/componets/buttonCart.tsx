import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ButtonCart = () => {
    return (
        <div>
            <div>
                <Button variant="primary"

                    style={{ marginTop: "10px", width: "360px", height: "36px", backgroundColor: "#3B82F6", color: "white", borderRadius: "5px", border: "none", fontSize: "16px" }}
                >
                    Checkout
                </Button>
            </div>
            <div>
                <Button variant="primary"

                    style={{ marginTop: "10px", width: "360px", height: "36px", color: "#3B82F6", borderRadius: "5px", border: "none", fontSize: "16px" }}
                >
                    Continue Shopping
                </Button>
            </div>
        </div>
    );
};

export default ButtonCart;