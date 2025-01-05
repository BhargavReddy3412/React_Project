import React, { useRef, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { TravelContext } from "../API/ContextApi/ContextApi";
import { useLocation } from "react-router-dom";
import './TicketBookedComp.css'; // Import the external CSS file

const TicketBookedComp = () => {
  const ticketRef = useRef(null);
  const { selectedTravel } = useContext(TravelContext);
  const { BusName, BusType, FromAddress, TimeFrom, ToAddress, BookedDate } = selectedTravel;
  const location = useLocation();
  const { TicketSeats, TicketPrice } = location.state || {};

  const downloadTicket = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("bus_ticket.pdf");
    }
  };

  return (
    <div className="container">
      <Card className="ticket-card" ref={ticketRef}>
        <Card.Body>
          <Card.Title className="ticket-title">
            {BusName} <span>({BusType})</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted ticket-subtitle">Booking Confirmed</Card.Subtitle>

          <div className="ticket-details">
            <div className="ticket-row">
              <strong>From:</strong>
              <span>{FromAddress}</span>
            </div>
            <div className="ticket-row">
              <strong>To:</strong>
              <span>{ToAddress}</span>
            </div>
            <div className="ticket-row">
              <strong>Date:</strong>
              <span>{BookedDate || new Date().toLocaleDateString()}</span>
            </div>
            <div className="ticket-row">
              <strong>Journey Time:</strong>
              <span>{TimeFrom}</span>
            </div>
            <div className="ticket-row">
              <strong>Seat Number:</strong>
              <span>{TicketSeats?.map((a) => a + "").join(",")}</span>
            </div>
            <div className="ticket-row">
              <strong>Contact Driver:</strong>
              <span>+91-9876543210</span>
            </div>
            <div className="ticket-row">
              <strong>Fare:</strong>
              <span>₹{TicketPrice}</span>
            </div>
          </div>

          <Button className="download-btn" variant="primary" onClick={downloadTicket}>
            Download Ticket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TicketBookedComp;
