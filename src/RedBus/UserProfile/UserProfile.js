import React, { useEffect, useState, useContext } from "react";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";
import axios from "axios"; // To fetch data from Firebase
import { Card, ListGroup, Spinner } from "react-bootstrap"; // React Bootstrap components
import "./UserProfile.css"; // Custom CSS for additional styling

function UserProfile() {
  const userProfileRTFB = useContext(UserProfileInfoRTFBContext);
  const [userTickets, setUserTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profileNotFound, setProfileNotFound] = useState(false);

  const ProfileUser = userProfileRTFB.userProfileRTFB?.name || "user";

  const url = "https://traveler-authendication-default-rtdb.firebaseio.com/Bookings.json";

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(url); // Fetch data from Firebase
        const data = response.data;

        // Check if the profile exists
        if (data && data[ProfileUser]) {
          setUserTickets(data[ProfileUser]);
          setProfileNotFound(false); // Profile found
        } else {
          setProfileNotFound(true); // No profile found
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [ProfileUser]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" variant="primary" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      {profileNotFound ? (
        <div className="profile-not-found">
          <p>No user profile found for {ProfileUser}</p>
        </div>
      ) : (
        <>
          {/* User Details Card */}
          <Card className="user-details-card mb-4">
            <Card.Body>
              <Card.Title>{userProfileRTFB.userProfileRTFB?.name || "User"}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {userProfileRTFB.userProfileRTFB?.email || "user@example.com"}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* User Tickets Card */}
          <Card className="user-tickets-card">
            <Card.Body>
              <Card.Title>Your Tickets</Card.Title>
              {userTickets.length > 0 ? (
                <ListGroup variant="flush">
                  {userTickets.map((ticket, index) => (
                    <ListGroup.Item key={index} className="ticket-item">
                      <strong>Bus: </strong> {ticket.travelName}
                      <br />
                      <strong>From: </strong> {ticket.fromAddress} <strong>To: </strong> {ticket.toAddress}
                      <br />
                      <strong>Date: </strong> {ticket.travelDate}
                      <br />
                      <strong>Seats: </strong> {ticket.tickets.map((t) => t.seatNumber).join(", ")}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>You have no tickets.</p>
              )}
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}

export default UserProfile;
