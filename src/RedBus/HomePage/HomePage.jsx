import React, { useState, useRef, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./HomePage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";

export default function HomePage() {
  const { userProfileRTFB, setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isGuestUser = location.state?.userLogin && !location.state?.userProfile;
 
    // Flag to track if the warning message has been shown
    const warningShownRef = useRef(false);
  


    useEffect(() => {
      if (userProfileRTFB || isGuestUser) {
        if (userProfileRTFB) {
          localStorage.setItem("userProfileRTFB", JSON.stringify(userProfileRTFB));
        }
      } else {
        const savedUserProfile = localStorage.getItem("userProfileRTFB");
        if (savedUserProfile) {
          setUserProfileRTFB(JSON.parse(savedUserProfile));
        } else if (!warningShownRef.current) {
          // Show the warning message only once
          message.warning("Please login to access this page.");
          warningShownRef.current = true;  
          navigate("/login");
        }
      }
    }, [userProfileRTFB, navigate, setUserProfileRTFB, isGuestUser]);
  const [formData, setFormData] = useState({
    FromAddress: "",
    ToAddress: "",
    SearchDate: "",
  });

  const fromAddressRef = useRef(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFindBuses = () => {
    if (!formData.FromAddress || !formData.ToAddress || !formData.SearchDate) {
      message.error("Please fill in all the fields.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(formData.SearchDate);

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      message.error("The selected date must be today or a future date.");
      return;
    }

    navigate("/Home/routes", { state: formData });
  };
 const handleGetTicketNow = () => {
    fromAddressRef.current.focus();
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="HomePageContainer">
      <div className="LeftSide">
        <h1 className="TravelCaption">Get Your Ticket Online,</h1>
        <h1 className="TravelCaption">Easy and Safely</h1>
        <Button variant="success" onClick={handleGetTicketNow}>
          Get Ticket Now
        </Button>
      </div>
      <div className="RightSide">
        <h2 className="TravelTicketCaption">Choose Your Ticket</h2>
        <Card className="mb-2 CardBox">
          <Card.Body>
            <div className="searchConatiner">
              <input
                type="text"
                name="FromAddress"
                placeholder="From"
                required
                value={formData.FromAddress}
                onChange={handleInputChange}
                ref={fromAddressRef}
              />
              <input
                type="text"
                name="ToAddress"
                placeholder="To"
                required
                value={formData.ToAddress}
                onChange={handleInputChange}
              />
            </div>
            <input
              id="SearchDate"
              type="date"
              name="SearchDate"
              required
              value={formData.SearchDate}
              onChange={handleInputChange}
              min={getTodayDate()}
            />
            <Button variant="success" id="FindBus-btn" onClick={handleFindBuses}>
              Find Tickets
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

