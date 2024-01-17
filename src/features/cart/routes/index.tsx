import { List } from "material-ui";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ListCart from "../componets/listCart";
import CheckoutCart from "../componets/checkoutCart";
import ButtonCart from "../componets/buttonCart";

export const ShoppingCart: React.FC = () => {
  return (
    <>
      <Row className="justify-content-center" style={{ paddingTop: "1rem" }}>
        <Col md={12}>
          <div
            className="bg-white p-3 mb-3 text-center"
            style={{ maxWidth: "1200px", margin: "auto" }}
          >
            <h1
              className="mt-3"
              style={{
                paddingTop: "12px",
                height: "36px",
                textAlign: "center",
                fontSize: "16px",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              My Shopping Cart
            </h1>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ListCart />
              <div>
                <CheckoutCart />
                <ButtonCart />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
