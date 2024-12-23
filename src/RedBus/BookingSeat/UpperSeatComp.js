 const UpperSeat = (props) => {
    return (
      <div style={{border:"2px solid black",height:"35px",width:"60px",fontSize:"10PX",display:"flex",justifyContent:"space-between"}}>
              <span>{props.Seat}</span>
        <p style={{border:"2px solid black",height:"20px",width:"12px",borderRadius:"2px",marginTop:"8px"}}></p>
      </div>
    )
  }
  
  export default UpperSeat
  