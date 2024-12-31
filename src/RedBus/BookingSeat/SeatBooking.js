import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LowerSeat from "./LowerSeatComp";
import UpperSeat from './UpperSeatComp';
import "./SeatBooking.css";

function TextExample() {
  const [seatStatus, setSeatStatus] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  let [selectedSeat, setSelectedSeat] = useState({
    seat: [],
    Gender: [],
  });
  const [cnfrm, setCnfrm] = useState(false);
  let navigate = useNavigate();

  const [gender, setGender] = useState("");  

  const handleBookingSeat = (seatId) => {
    if (isConfirmed) {
      alert("Seats are confirmed. You cannot change the selection.");
      return;
    }

    if (seatStatus[seatId]) {
      const updatedSelectedSeats = selectedSeat.seat.filter((seat) => seat !== seatId);
      setSelectedSeat({ ...selectedSeat, seat: updatedSelectedSeats });

      const updatedStatus = { ...seatStatus };
      delete updatedStatus[seatId];
      setSeatStatus(updatedStatus);
    } else {
      if (gender === "male" || gender === "female") {
        setSelectedSeat((prevSelected) => ({
          ...prevSelected,
          seat: [...prevSelected.seat, seatId],
          Gender: [...prevSelected.Gender, gender],
        }));

        setSeatStatus((prevStatuses) => ({
          ...prevStatuses,
          [seatId]: { gender, color: gender === "male" ? "gray" : "red" },
        }));
      } else {
        alert("Please select a gender (Male or Female).");
      }
    }
  };

  const getSeatStyle = (seatId) => {
    const seatInfo = seatStatus[seatId];
    return {
      backgroundColor: seatInfo ? seatInfo.color : "white",
    };
  };

  const handleConformSeats = () => {
    if (Object.keys(seatStatus).length === 0) {
      alert("No seats selected. Please select at least one seat to confirm.");
      return;
    }
  
    navigate("/Home/Details", { state: selectedSeat });
    setIsConfirmed(true);
    alert("Seats confirmed successfully!");
    setCnfrm(true);
  };

  return (
    <div className="BookingContainer">
      <p>Click on an Available seat to proceed with your transaction.</p>
      
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
          />
          Female
        </label>
      </div>

      <div className='LowerDeskContainer'>
        <Card className='LowerDesk'>
          <Card.Body>
            <p>Lower Desk</p>
            <table className='LowerDesk-Table'>
              <tbody>
                <tr rowSpan="2" style={{ backgroundColor: '#f7f7f7' }}>
                  <td colSpan="1" onClick={() => handleBookingSeat("A1")} style={getSeatStyle("A1")}>A1<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A2")} style={getSeatStyle("A2")}>A2<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A3")} style={getSeatStyle("A3")}>A3<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A4")} style={getSeatStyle("A4")}>A4<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A5")} style={getSeatStyle("A5")}>A5<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A6")} style={getSeatStyle("A6")}>A6<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A7")} style={getSeatStyle("A7")}>A7<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A8")} style={getSeatStyle("A8")}>A8<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("A9")} style={getSeatStyle("A9")}>A9<LowerSeat /></td>
                </tr>
                <tr rowSpan="2" style={{ backgroundColor: '#ffffff' }}>
                  <td colSpan="1" onClick={() => handleBookingSeat("B1")} style={getSeatStyle("B1")}>B1<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B2")} style={getSeatStyle("B2")}>B2<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B3")} style={getSeatStyle("B3")}>B3<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B4")} style={getSeatStyle("B4")}>B4<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B5")} style={getSeatStyle("B5")}>B5<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B6")} style={getSeatStyle("B6")}>B6<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B7")} style={getSeatStyle("B7")}>B7<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B8")} style={getSeatStyle("B8")}>B8<LowerSeat /></td>
                  <td colSpan="1" onClick={() => handleBookingSeat("B9")} style={getSeatStyle("B9")}>B9<LowerSeat /></td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Card>

        <div className='Seat-Info'>
          <h3>Seat Info</h3>
          <div>
            <p id="SeatInfo-Avaliable"></p>
            <p>Available</p>
          </div>

          <div>
            <p id="SeatInfo-UnAvaliable"></p>
            <p>Unavailable</p>
          </div>

          <div>
            <p id="SeatInfo-Female"></p>
            <p>Female</p>
          </div>
        </div>
      </div>

      <Card className='UpperDesk'>
        <Card.Body>
          <p>Upper Desk</p>
          <table className='UpperDesk-Table'>
            <tbody className='UpperDesk-Table-Body'>
              <tr className='UpperDesk-Table-Row'>
                <td onClick={() => handleBookingSeat("U-A1")} style={getSeatStyle("U-A1")}><UpperSeat Seat="U-A1" /></td>
                <td onClick={() => handleBookingSeat("U-A2")} style={getSeatStyle("U-A2")}><UpperSeat Seat="U-A2" /></td>
                <td onClick={() => handleBookingSeat("U-A3")} style={getSeatStyle("U-A3")}><UpperSeat Seat="U-A3" /></td>
                <td onClick={() => handleBookingSeat("U-A4")} style={getSeatStyle("U-A4")}><UpperSeat Seat="U-A4" /></td>
                <td onClick={() => handleBookingSeat("U-A5")} style={getSeatStyle("U-A5")}><UpperSeat Seat="U-A5" /></td>
                <td onClick={() => handleBookingSeat("U-A6")} style={getSeatStyle("U-A6")}><UpperSeat Seat="U-A6" /></td>
              </tr>
              <tr className='UpperDesk-Table-Row'>
                <td onClick={() => handleBookingSeat("U-B1")} style={getSeatStyle("U-B1")}><UpperSeat Seat="U-B1" /></td>
                <td onClick={() => handleBookingSeat("U-B2")} style={getSeatStyle("U-B2")}><UpperSeat Seat="U-B2" /></td>
                <td onClick={() => handleBookingSeat("U-B3")} style={getSeatStyle("U-B3")}><UpperSeat Seat="U-B3" /></td>
                <td onClick={() => handleBookingSeat("U-B4")} style={getSeatStyle("U-B4")}><UpperSeat Seat="U-B4" /></td>
                <td onClick={() => handleBookingSeat("U-B5")} style={getSeatStyle("U-B5")}><UpperSeat Seat="U-B5" /></td>
                <td onClick={() => handleBookingSeat("U-B6")} style={getSeatStyle("U-B6")}><UpperSeat Seat="U-B6" /></td>
              </tr>
              <tr className='UpperDesk-Table-Row'>
                <td onClick={() => handleBookingSeat("U-C1")} style={getSeatStyle("U-C1")}><UpperSeat Seat="U-C1" /></td>
                <td onClick={() => handleBookingSeat("U-C2")} style={getSeatStyle("U-C2")}><UpperSeat Seat="U-C2" /></td>
                <td onClick={() => handleBookingSeat("U-C3")} style={getSeatStyle("U-C3")}><UpperSeat Seat="U-C3" /></td>
                <td onClick={() => handleBookingSeat("U-C4")} style={getSeatStyle("U-C4")}><UpperSeat Seat="U-C4" /></td>
                <td onClick={() => handleBookingSeat("U-C5")} style={getSeatStyle("U-C5")}><UpperSeat Seat="U-C5" /></td>
                <td onClick={() => handleBookingSeat("U-C6")} style={getSeatStyle("U-C6")}><UpperSeat Seat="U-C6" /></td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>

      <div>
        <button className="ConfirmBtn" onClick={handleConformSeats}>
          {cnfrm === false ? "Confirm your Seat(s)" : "Seats Confirmed!"}
        </button>
      </div>
    </div>
  );
}

export default TextExample;
