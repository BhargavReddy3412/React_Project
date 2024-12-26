import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';

import { TicketPrice } from '../FindBuses/FindingRoutes';

const PassengerDetails = () => {
  let TicketPrices=useContext(TicketPrice)
  console.log(TicketPrices,"price")
  const location = useLocation();
  const [seatData, setSeatData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const seatsParam = queryParams.get('seats');

    if (seatsParam) {
      try {
       
        const decodedSeats = JSON.parse(decodeURIComponent(seatsParam));
        setSeatData(decodedSeats);
      } catch (error) {
        console.error("Error parsing seat data:", error);
      }
    }
  }, [location.search]);

  console.log(seatData);  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Card style={{ width: "90%", maxWidth: "500px", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Header className="text-center bg-primary text-white" style={{ fontSize: "1.5rem" }}>Passenger Details</Card.Header>
        <Card.Body>
          <Form>

            {seatData && seatData.seat.length > 0 && seatData.seat.map((seat, index) => (
              <div key={seat} style={{ marginBottom: "20px" }}>
                <h5>Passenger {index + 1} - Seat: {seat}</h5>

                <Form.Group className="mb-3" controlId={`passengerName-${index}`}>
                  <Form.Label>Name of Passenger {index + 1}</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId={`passengerGender-${index}`}>
                </Form.Group>

                <Form.Group className="mb-3" controlId={`passengerAge-${index}`}>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Enter your age" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId={`passengerEmail-${index}`}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId={`passengerMobile-${index}`}>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your mobile number" required />
                </Form.Group>
              </div>
            ))}

            {/* Display selected seat and gender for each passenger */}
            {seatData && seatData.seat.length > 0 && (
              <div>
                <h5>Selected Seats:</h5>
                <ul>
                  {seatData.seat.map((seat, index) => (
                    <li key={seat}>
                      <strong>Seat:</strong> {seat}, <strong>Gender:</strong> {seatData.Gender[index]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
