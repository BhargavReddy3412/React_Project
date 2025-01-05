import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactPage.css"

const ContactPage = () => {
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
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formCompanyName">
                      <Form.Label>Complaint</Form.Label>
                      <Form.Control type="text" placeholder="Enter tou Complaint" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formIndustry">
                      <Form.Label>Travel Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your TravelName" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formAnnualRevenue">
                      <Form.Label>Bus Seat number</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Seat Number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formCountry">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formReceiveNews">
                  <Form.Check type="checkbox" label="Yes, I would like to receive news and offers via email" />
                </Form.Group>
                <Form.Group controlId="formReceiveCalls">
                  <Form.Check type="checkbox" label="Yes, I agree to receive phone calls" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
