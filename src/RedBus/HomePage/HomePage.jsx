import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./HomePage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [formData, setFormData] = useState({
    FromAddress: "",
    ToAddress: "",
    SearchDate: "",
});
  const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleFindBuses = () => {
    if (!formData.FromAddress || !formData.ToAddress || !formData.SearchDate) {
        alert("Please fill in all the fields.");
        return;
    }
    navigate("/Home/routes", { state: formData });
};
  return (
    <>
      <div className="HomePageContainer">
        <div className="LeftSide">
          <h1>Get Your Ticket Online,</h1>
          <h1>Easy and Safely</h1>
          <Button variant="success">Get Ticket Now</Button>
        </div>
        <div className="RightSide">
          <h2>Choose Your Ticket</h2>
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

                <Button variant="success" id="FindBus-btn" onClick={handleFindBuses}>Find Tickets</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <img
        id="HomeBusImg"
        src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-modern-white-bus-side-view-png-image_11576097.png"
        alt=""
      />
    
    </>
  );
}
