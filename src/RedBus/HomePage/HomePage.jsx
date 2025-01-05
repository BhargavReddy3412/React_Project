import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./HomePage.css";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomePage() {
  let location = useLocation();
  let userLogin = location.state?.userLogin || false;
  const [formData, setFormData] = useState({
    FromAddress: "",
    ToAddress: "",
    SearchDate: "",
  });
  const navigate = useNavigate();

  // Use useRef to reference the input fields
  const fromAddressRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFindBuses = () => {
    if (!formData.FromAddress || !formData.ToAddress || !formData.SearchDate) {
      alert("Please fill in all the fields.");
      return;
    }

    if (userLogin) {
      navigate("/Home/routes", { state: formData });
    } else {
      alert("Please Login");
      navigate("/");
    }
  };

  const handleGetTicketNow = () => {
    // Focus on the "From" input field when the button is clicked
    fromAddressRef.current.focus();
  };

  return (
    <>
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
                  ref={fromAddressRef} // Attach the ref to the "From" input field
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
              />

              <Button variant="success" id="FindBus-btn" onClick={handleFindBuses}>
                Find Tickets
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
