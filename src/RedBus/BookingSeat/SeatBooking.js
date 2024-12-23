import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LowerSeat from "./SeatComp";
import UpperSeat from './UpperSeatComp';
import "./SeatBooking.css";

function TextExample() {
  const [seatStatus, setSeatStatus] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  let [selectedSeat, setSelectedSeat] = useState({
    seat: [],
    Gender: "",
  });
  let navigate = useNavigate();

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
      const gender = prompt("Select Gender: Enter 'Male' or 'Female'").toLowerCase();
      if (gender === "male" || gender === "female") {

        setSelectedSeat((prevSelected) => ({
          ...prevSelected,
          seat: [...prevSelected.seat, seatId],
          Gender: gender,
        }));

        setSeatStatus((prevStatuses) => ({
          ...prevStatuses,
          [seatId]: { gender, color: gender === "male" ? "gray" : "red" },
        }));
      } else {
        alert("Invalid selection. Please enter 'Male' or 'Female'.");
      }
    }
  };

  const getSeatStyle = (state) => {
    const seatInfo = seatStatus[state];
    return {
      backgroundColor: seatInfo ? seatInfo.color : "white",
    };
  };

  let handleConformSeats = () => {
    if (Object.keys(seatStatus).length === 0) {
      alert("No seats selected. Please select at least one seat to confirm.");
      return;
    }
    setIsConfirmed(true);
    alert("Seats confirmed successfully!");
    navigate("/Home/Details");
  };

  // console.log(selectedSeat); 
  return (
    <div className="BookingContainer">
      <p>Click on an Available seat to proceed with your transaction.</p>
      <div className='LowerDeskContainer'>
      <Card className='LowerDesk'>
          <Card.Body>
            <table className='LowerDesk-Table'>
              <label>Lower Desk</label>
              <tr rowspan="2" style={{ backgroundColor: '#f7f7f7' }}>
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
              <tr rowspan="2" style={{ backgroundColor: '#ffffff' }}>
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
              <tr rowspan="2" style={{ backgroundColor: '#f7f7f7' }}>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1"> </td>
                <td colSpan="1" onClick={() => handleBookingSeat("B10")} style={getSeatStyle("B10")}>B10<LowerSeat /></td>
              </tr>
              <tr rowspan="2" style={{ backgroundColor: '#ffffff' }}>
                <td colSpan="1" onClick={() => handleBookingSeat("C1")} style={getSeatStyle("C1")}>C1<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C2")} style={getSeatStyle("C2")}>C2<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C3")} style={getSeatStyle("C3")}>C3<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C4")} style={getSeatStyle("C4")}>C4<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C5")} style={getSeatStyle("C5")}>C5<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C6")} style={getSeatStyle("C6")}>C6<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C7")} style={getSeatStyle("C7")}>C7<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C8")} style={getSeatStyle("C8")}>C8<LowerSeat /></td>
                <td colSpan="1" onClick={() => handleBookingSeat("C9")} style={getSeatStyle("C9")}>C9<LowerSeat /></td>
              </tr>
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
      <Card style={{ width: '45rem', marginTop: "50px", marginLeft: "190px", border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
         <Card.Body>
           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
             <label>Upper Desk</label>
             <tr rowspan="2" style={{ backgroundColor: '#f7f7f7' }}>
               <td colSpan="1" onClick={() => handleBookingSeat("U-A1")} style={getSeatStyle("U-A1")} ><UpperSeat Seat="U-A1" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A2")} style={getSeatStyle("U-A2")}><UpperSeat Seat="U-A2" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-A3")} style={getSeatStyle("U-A3")}><UpperSeat Seat="U-A3" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A4")} style={getSeatStyle("U-A4")}><UpperSeat Seat="U-A4" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A5")} style={getSeatStyle("U-A5")}><UpperSeat Seat="U-A5" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A6")} style={getSeatStyle("U-A6")}><UpperSeat Seat="U-A6" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A7")} style={getSeatStyle("U-A7")}><UpperSeat Seat="U-A7" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-A8")} style={getSeatStyle("U-A8")}><UpperSeat Seat="U-A8" /></td>
             </tr>
             <tr rowspan="2" style={{ backgroundColor: '#ffffff' }}>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B3")} style={getSeatStyle("U-B3")}><UpperSeat Seat="U-B1" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B3")} style={getSeatStyle("U-B3")}><UpperSeat Seat="U-B2" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B3")} style={getSeatStyle("U-B3")}><UpperSeat Seat="U-B3" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B4")} style={getSeatStyle("U-B4")}><UpperSeat Seat="U-B4" /></td>
              <td colSpan="1" onClick={() => handleBookingSeat("U-B5")} style={getSeatStyle("U-B5")}><UpperSeat Seat="U-B5" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B6")} style={getSeatStyle("U-B6")}><UpperSeat Seat="U-B6" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B7")} style={getSeatStyle("U-B7")}><UpperSeat Seat="U-B7" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-B8")} style={getSeatStyle("U-B8")}><UpperSeat Seat="U-B8" /></td>
             </tr>
             <tr rowspan="2" style={{ backgroundColor: '#f7f7f7' }}>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
               <td colSpan="1"> </td>
             </tr>
             <tr rowspan="2" style={{ backgroundColor: '#ffffff' }}>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C1")} style={getSeatStyle("U-C1")}><UpperSeat Seat="U-C1" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C2" )} style={getSeatStyle("U-C2" )}><UpperSeat Seat="U-C2" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C3")} style={getSeatStyle("U-C3")}><UpperSeat Seat="U-C3" /></td>

              <td colSpan="1" onClick={() => handleBookingSeat("U-C4")} style={getSeatStyle("U-C4")}><UpperSeat Seat="U-C4" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C5" )} style={getSeatStyle("U-C5" )}><UpperSeat Seat="U-C5" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C6")} style={getSeatStyle("U-C6")}><UpperSeat Seat="U-C6" /></td>
             <td colSpan="1" onClick={() => handleBookingSeat("U-C7")} style={getSeatStyle("U-C7")}><UpperSeat Seat="U-C7" /></td>
               <td colSpan="1" onClick={() => handleBookingSeat("U-C8")} style={getSeatStyle("U-C8")}><UpperSeat Seat="U-C8" /></td>
             </tr>
           </table>
         </Card.Body>
      </Card>


      <button onClick={handleConformSeats} disabled={isConfirmed}>{isConfirmed ? "Booking Confirmed" : "Confirm Booking"}</button>
    </div>
  );
}

export default TextExample;
