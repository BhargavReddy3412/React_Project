import React,{useContext} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./RouteCard.css";
import { TravelContext } from "../API/ContextApi/ContextApi";

function RouteCard(props) {
  const { setSelectedTravel } = useContext(TravelContext); // Access the context
  const navigate = useNavigate();

  const { BusName, BusType, Price, FromAddress, TimeFrom, JourneyTime, ToAddress, TimeDestnation,Date } = props;

  const handleBookingSeats = () => {
    setSelectedTravel({
      BusName,
      BusType,
      Price,
      FromAddress,
      TimeFrom,
      JourneyTime,
      ToAddress,
      TimeDestnation,
      Date,
    });
    navigate("/Home/BookSeat");
  };

  return (
    <Card className="route-card">
      <Card.Body className="route-card-body">
        <div className="travel-details">
          <div>
            <h5 className="travel-name">{BusName}</h5>
            <p className="travel-type">{BusType}</p>
          </div>
          <div>
            <h5 className="travel-price">Price : ₹ {Price}</h5>
          </div>
        </div>

        <div className="timing-route">
          <div className="route-from">
            <p className="route-label">
              From: <span className="route-highlight">{FromAddress}</span>
            </p>
            <p className="route-time">{TimeFrom}</p>
          </div>
          <div className="route-duration">
            <p className="duration-time">{JourneyTime}</p>
            <p className="duration-label">Duration</p>
            <p>Date:{Date.toString().split("T")[0].split("-").reverse().join("-")}</p>
          </div>
          <div className="route-to">
            <p className="route-label">
              To: <span className="route-highlight">{ToAddress}</span>
            </p>
            <p className="route-time">{TimeDestnation}</p>
          </div>
        </div>

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
