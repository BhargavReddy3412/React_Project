import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { TravelContext } from "../API/ContextApi/ContextApi";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { app } from "../FireBase_Folder/FireBase";
import "./PassengerDetails.css";

const PassengerDetails = () => {
  const location = useLocation();
  const { seat } = location.state;

  const { userProfileRTFB } = useContext(UserProfileInfoRTFBContext);
  const { selectedTravel } = useContext(TravelContext);
  const { Price, BusName, BusType, FromAddress, ToAddress, BookedDate } = selectedTravel;
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

  const handlePayment = async () => {
    const isValid = passengerDetails.every(
      (passenger) =>
        passenger.name.trim() &&
        passenger.age.trim() &&
        passenger.email.trim() &&
        passenger.mobile.trim() &&
        passenger.gender !== "Not Specified"
    );

    if (!isValid) {
      alert("Please fill in all passenger details before proceeding.");
      return;
    }

    try {
      const database = getDatabase(app);

      const ticketDetails = seat.map((seatNo, index) => ({
        seatNumber: seatNo,
        passengerName: passengerDetails[index].name,
        passengerAge: passengerDetails[index].age,
        passengerEmail: passengerDetails[index].email,
        passengerMobile: passengerDetails[index].mobile,
        passengerGender: passengerDetails[index].gender,
      }));

      const newBooking = {
        tickets: ticketDetails,
        totalPrice: Price * seat.length,
        bookingTime: new Date().toISOString(),
        fromAddress: FromAddress,
        toAddress: ToAddress,
        travelName: BusName,
        travelType: BusType,
        travelDate: BookedDate,
      };

      const bookingsRef = ref(database, `Bookings/${userProfileRTFB.name}`);
      const userBookingsSnapshot = await get(bookingsRef);
      const userBookings = userBookingsSnapshot.exists() ? userBookingsSnapshot.val() : [];
      userBookings.push(newBooking);
      await set(bookingsRef, userBookings);

      const bookedSeatsRef = ref(database, `BookedSeats/${BusName}`);
      const bookedSeatsSnapshot = await get(bookedSeatsRef);
      const existingBookedSeats = bookedSeatsSnapshot.exists() ? bookedSeatsSnapshot.val() : [];

      const newSeatData = {
        ConformedSeats: seat,
        BookedDate: BookedDate,
        ConformedFromAddress: FromAddress,
        ConformedToAddress: ToAddress,
        ConformedTravelName: BusName,
        ConformedTravelType: BusType,
        ConformedTravelDate: BookedDate,
      };

      existingBookedSeats.push(newSeatData);
      await set(bookedSeatsRef, existingBookedSeats);

      alert("Tickets booked successfully!");

      navigate("/Home/Payment", {
        state: {
          PaymentBookedSeat: seat,
          PaymentBookedPrice: Price * seat.length,
          PassengerDetails: passengerDetails,
        },
      });
    } catch (error) {
      console.error("Error storing booking details:", error);
      alert("There was an error processing your booking. Please try again.");
    }
  };

  return (
    <div className="passenger-details-container">
      <Card className="passenger-details-card">
        <Card.Header className="passenger-details-header">
          Passenger Details
        </Card.Header>
        <Card.Body>
          <Form>
            {seat.map((seatNo, index) => (
              <div className="passenger-details-form-group" key={index}>
                <h5 className="passenger-details-title">
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
                    type="number"
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
            <div className="passenger-details-total">
              Total Price: ₹{Price * seat.length || 0}
            </div>
            <Button
              variant="success"
              size="lg"
              className="passenger-details-button"
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
