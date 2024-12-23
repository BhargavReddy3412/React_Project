import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./RouteCard.css";

function RouteCard(props) {
 let navigate=useNavigate()

 let handleBookingSeats=()=>{
  navigate("/Home/BookSeat")
  }
  return (
    <Card className="route-card">
      <Card.Body className="route-card-body">
        {/* Travel Details Section */}
        <div className="travel-details">
          <div>
            <h5 className="travel-name">{props.BusName}</h5>
            <p className="travel-type">{props.BusType}</p>
          </div>
          <div>
            <h5 className="travel-price">Price : ₹ {props.Price}</h5>
          </div>
        </div>

        {/* Timing and Route Section */}
        <div className="timing-route">
          <div className="route-from">
            <p className="route-label">From: <span className="route-highlight">{props.FromAddress}</span></p>
            <p className="route-time">{props.TimeFrom}</p>
          </div>
          <div className="route-duration">
            <p className="duration-time">{props.JourneyTime}</p>
            <p className="duration-label">Duration</p>
          </div>
          <div className="route-to">
            <p className="route-label">To: <span className="route-highlight">{props.ToAddress}</span></p>
            <p className="route-time">{props.TimeDestnation}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="action-button">
          <Button className="view-seats-btn" variant="danger" onClick={handleBookingSeats}>
            View Seats
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RouteCard;
