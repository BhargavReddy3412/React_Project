import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentComp.css";
const PaymentComp = () => {
  let Navigate = useNavigate();
  const location = useLocation();
  const { PaymentBookedSeat, PaymentBookedPrice } = location.state || {};

  const [ticketPrice, setTicketPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const coupons = [
    { code: "DISCOUNT50", label: "Save ₹50 on your ticket!", color: "#FF5733" },
    { code: "SAVE20", label: "Get ₹20 off instantly!", color: "#4CAF50" },
    { code: "FREESHIP", label: "Free shipping for your next order!", color: "#2196F3" },
  ];

  useEffect(() => {
    if (PaymentBookedSeat && PaymentBookedPrice) {
      setTicketPrice(PaymentBookedPrice * PaymentBookedSeat.length);
    }
  }, [PaymentBookedSeat, PaymentBookedPrice]);

  const handleApplyCoupon = () => {
    const coupon = coupons.find((c) => c.code === couponCode);
    if (coupon && coupon.code === "DISCOUNT50") {
      setDiscount(50);
      setMessage("Coupon applied successfully! You saved ₹50.");
    } else if (coupon && coupon.code === "SAVE20") {
      setDiscount(20);
      setMessage("Coupon applied successfully! You saved ₹20.");
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code. Please try again.");
    }
  };

  const handlePaymentClick = (method) => {
    setSelectedPayment((prev) => (prev === method ? "" : method));
  };

  const finalPrice = ticketPrice - discount;

  const handleTicketConform = () => {
    Navigate("/Home/TicketConform", {
      state: {
        TicketSeats: PaymentBookedSeat,
        TicketPrice: finalPrice,
      },
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12} lg={8}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h1>Payment Page</h1>
              <h4 className="mb-4 text-center">Available Coupons</h4>
              <Carousel fade interval={3000} className="mb-4">
                {coupons.map((coupon, index) => (
                  <Carousel.Item key={index}>
                    <div
                      className="coupon-card"
                      style={{ backgroundColor: coupon.color }}
                    >
                      <h5 className="fw-bold text-white">{coupon.label}</h5>
                      <p className="text-white mt-2">
                        Code: <strong>{coupon.code}</strong>
                      </p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <h4 className="mb-4 text-center">Select Payment Method</h4>
              <div className="d-flex flex-wrap justify-content-around mb-4">
                {["PhonePe", "Google Pay", "Paytm"].map((method) => (
                  <Button
                    key={method}
                    variant={selectedPayment === method ? "success" : "outline-secondary"}
                    className="payment-button"
                    onClick={() => handlePaymentClick(method)}
                  >
                    {method}
                  </Button>
                ))}
              </div>

              <h4 className="mb-4 text-center">Apply Coupon Code</h4>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button variant="primary" onClick={handleApplyCoupon}>
                  Apply
                </Button>
              </InputGroup>

              {message && (
                <Alert variant={discount > 0 ? "success" : "danger"}>{message}</Alert>
              )}

              <div className="d-flex justify-content-between mt-4">
                <span className="fw-bold">Ticket Price:</span>
                <span>₹{ticketPrice}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Discount:</span>
                <span>₹{discount}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Final Price:</span>
                <span>₹{finalPrice}</span>
              </div>

              <Button
                variant="success"
                className="w-100 mt-4"
                onClick={handleTicketConform}
                disabled={!selectedPayment} // Button is disabled if no payment method is selected
              >
                 Payment Done₹{finalPrice}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentComp;
