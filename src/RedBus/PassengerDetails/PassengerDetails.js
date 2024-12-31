import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { TravelContext } from "../API/ContextApi/ContextApi";

const PassengerDetails = () => {
  const location = useLocation();
  const { seat } = location.state;

  const { selectedTravel } = useContext(TravelContext);
  const { Price } = selectedTravel;
  let navigate = useNavigate();

  const [passengerDetails, setPassengerDetails] = useState(
    seat.map(() => ({
      name: "",
      age: "",
      email: "",
      mobile: "",
      gender: "Not Specified",  
    }))
  );

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index][field] = value;
    setPassengerDetails(updatedDetails);
  };

  const handlePayment = () => {
    navigate("/Home/Payment", {
      state: {
        PaymentBookedSeat: seat,
        PaymentBookedPrice: Price,
        PassengerDetails: passengerDetails,
      },
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
        }}
      >
        <Card.Header
          className="text-center"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "1.8rem",
            fontWeight: "bold",
            borderRadius: "10px 10px 0 0",
            padding: "15px",
          }}
        >
          Passenger Details
        </Card.Header>
        <Card.Body>
          <Form>
            {seat.map((seatNo, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#f8f9fa",
                  padding: "15px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  Passenger for Seat No: {seatNo}
                </h5>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={passengerDetails[index].name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    value={passengerDetails[index].age}
                    onChange={(e) =>
                      handleInputChange(index, "age", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={passengerDetails[index].email}
                    onChange={(e) =>
                      handleInputChange(index, "email", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                    value={passengerDetails[index].mobile}
                    onChange={(e) =>
                      handleInputChange(index, "mobile", e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    value={passengerDetails[index].gender}
                    onChange={(e) =>
                      handleInputChange(index, "gender", e.target.value)
                    }
                  >
                    <option value="Not Specified">Not Specified</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </div>
            ))}
            <div
              className="mb-4 text-center"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#ff6f61",
              }}
            >
              Total Price: ₹{Price * seat.length || 0}
            </div>

            <Button
              variant="success"
              size="lg"
              className="w-100"
              style={{
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
              onClick={handlePayment}
            >
              Proceed to Pay
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PassengerDetails;
