import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactPage.css";

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    complaint: '',
    travelName: '',
    seatNumber: '',
    fromAddress: '',
    receiveNews: false,
    receiveCalls: false,
  });

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the modal on form submit
  };

  // Handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="contact-page">
      <Row className="justify-content-md-center ContactPage-cardContainetr">
        <Col md={8}>
          <Card className="contact-card mt-4">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Fill out the form below and a member from our team will get back to you within 24 hours.
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your first name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your last name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formComplaint">
                      <Form.Label>Complaint</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your complaint" 
                        name="complaint"
                        value={formData.complaint}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTravelName">
                      <Form.Label>Travel Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your travel name" 
                        name="travelName"
                        value={formData.travelName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formSeatNumber">
                      <Form.Label>Bus Seat Number</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your seat number" 
                        name="seatNumber"
                        value={formData.seatNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formFromAddress">
                      <Form.Label>From</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your address" 
                        name="fromAddress"
                        value={formData.fromAddress}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formReceiveNews">
                  <Form.Check 
                    type="checkbox" 
                    label="Yes, I would like to receive news and offers via email" 
                    name="receiveNews"
                    checked={formData.receiveNews}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formReceiveCalls">
                  <Form.Check 
                    type="checkbox" 
                    label="Yes, I agree to receive phone calls" 
                    name="receiveCalls"
                    checked={formData.receiveCalls}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for form submission success */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your data has been successfully submitted. A member from our team will get back to you within 24 hours.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactPage;
