 import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const PassengerDetails = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Card style={{ width: "90%", maxWidth: "500px", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Header className="text-center bg-primary text-white" style={{ fontSize: "1.5rem" }}>Passenger Details</Card.Header>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="passengerName">
              <Form.Label>Name of Passenger</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passengerGender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  id="male"
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  id="female"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passengerAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passengerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passengerMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile number" required/>
            </Form.Group>

            <div className="mb-3 text-center" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#dc3545" }}>
              Price: ₹10,000
            </div>

            <Button variant="success" size="lg" className="w-100">
              Proceed to Pay
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PassengerDetails;



