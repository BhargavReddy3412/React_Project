import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./BlogPage.css";

const buses = [
  {
    id: 1,
    name: "Luxury Coach",
    description:
      "Experience unmatched luxury with spacious seating, premium interiors, and top-class amenities.",
    additionalDescription:
      "Perfect for long-distance travel with high-end service and comfort. Enjoy a smooth ride with premium features.",
    image:
      "https://chennaibusrental.com/wp-content/uploads/2022/01/Mercedes-Benz-Luxury-Coach.jpeg",
  },
  {
    id: 2,
    name: "Sleeper Bus",
    description:
      "Travel overnight in comfort with fully reclining beds and personal charging points.",
    additionalDescription:
      "Ideal for overnight journeys, ensuring a comfortable sleep. Features include privacy curtains and ample space.",
    image:
      "https://indtoday.com/wp-content/uploads/2023/03/tsrtc-ac-sleeper-buses.jpg",
  },
  {
    id: 3,
    name: "Economy Bus",
    description:
      "Affordable and reliable transportation for budget-conscious travelers.",
    additionalDescription:
      "Enjoy a cost-effective and safe travel experience. Great for short to medium-distance trips with basic amenities.",
    image: "https://cdn.bookaway.com/media/files/6069aeea5f209a682add3b8e.jpeg",
  },
  {
    id: 4,
    name: "Express Bus",
    description:
      "Quick and non-stop service to your destination with minimal stops.",
    additionalDescription:
      "Perfect for travelers who prioritize speed. Minimal stops ensure a faster, more efficient journey.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.nA5A7yYirDjpW7dcrVfTvwHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "VIP Bus",
    description:
      "Enjoy exclusive VIP treatment with extra legroom, gourmet snacks, and priority boarding.",
    additionalDescription:
      "A luxury experience with top-tier amenities. Ideal for those seeking privacy and a premium travel experience.",
    image: "https://www.vipbus.nl/assets/images/foto13/vipbus-arnhem.jpg",
  },
  {
    id: 6,
    name: "Family Bus",
    description:
      "Perfect for family trips with ample space, entertainment options, and safety features.",
    additionalDescription:
      "Designed to keep families entertained and comfortable. Features include kid-friendly amenities and spacious seating.",
    image:
      "http://tinyhousetalk.com/wp-content/uploads/youtu.be-o7X2nOtwdUM.jpg",
  },
  {
    id: 7,
    name: "Budget Bus",
    description:
      "Travel economically without compromising on safety and comfort.",
    additionalDescription:
      "Ideal for budget-conscious travelers looking for basic amenities. Enjoy a comfortable and safe trip within your budget.",
    image:
      "https://thumbs.dreamstime.com/z/budget-bus-greenbus-company-chiangmai-thailand-september-chiangmai-chiangrai-photo-new-chiangmai-station-60695298.jpg",
  },
  {
    id: 8,
    name: "Luxury Sleeper",
    description:
      "Combining luxury and comfort for overnight journeys with deluxe sleeper facilities.",
    additionalDescription:
      "Get the best of both worlds with a luxurious sleeping experience. Enjoy privacy, comfort, and premium features during your journey.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.MERAmb8mx4UH7Ci2XEc_nwHaCy&pid=Api&P=0&h=180",
  },
];

const BlogPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleMoreDetails = (bus) => {
    setSelectedBus(bus);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="Blog-Page">
      <h1 className="blogPage-header text-center my-4">Bus Details</h1>
      <p className="blogPage-description text-center">
        Explore our wide range of buses tailored to suit every travel need. From
        luxury coaches to budget-friendly options, we ensure comfort, safety,
        and convenience for every journey.
      </p>
      <Container>
        <Row>
          {buses.map((bus) => (
            <Col key={bus.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="blogPage-busCard h-100">
                <Card.Img
                  variant="top"
                  src={bus.image}
                  alt={`Image of ${bus.name}`}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x200.png?text=Image+Unavailable")
                  }
                />
                <Card.Body>
                  <Card.Title className="blogPage-busTitle">{bus.name}</Card.Title>
                  <Card.Text className="blogPage-busDescription">
                    {bus.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="blogPage-moreDetailsBtn"
                    onClick={() => handleMoreDetails(bus)}
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedBus && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBus.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedBus.image}
              alt="BusImage"
              className="img-fluid mb-3"
            />
            <h5>Description:</h5>
            <p>{selectedBus.description}</p>
            <h5>Additional Information:</h5>
            <p>{selectedBus.additionalDescription}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default BlogPage;
