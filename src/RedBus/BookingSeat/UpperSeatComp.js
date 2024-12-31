 import "./UpperSeatComp.css" 
const UpperSeat = (props) => {
  return (
    <div className="upper-seat-container">
      <span>{props.Seat}</span>
      <p className="upper-seat-indicator"></p>
    </div>
  );
};

export default UpperSeat;
