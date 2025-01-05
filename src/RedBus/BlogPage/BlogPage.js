import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./BlogPage.css";

const buses = [
  {
    id: 1,
    name: "Luxury Coach",
    description:
      "Experience unmatched luxury with spacious seating, premium interiors, and top-class amenities.",
    image:
      "https://chennaibusrental.com/wp-content/uploads/2022/01/Mercedes-Benz-Luxury-Coach.jpeg",
  },
  {
    id: 2,
    name: "Sleeper Bus",
    description:
      "Travel overnight in comfort with fully reclining beds and personal charging points.",
    image:
      "https://indtoday.com/wp-content/uploads/2023/03/tsrtc-ac-sleeper-buses.jpg",
  },
  {
    id: 3,
    name: "Economy Bus",
    description:
      "Affordable and reliable transportation for budget-conscious travelers.",
    image: "https://cdn.bookaway.com/media/files/6069aeea5f209a682add3b8e.jpeg",
  },
  {
    id: 4,
    name: "Express Bus",
    description:
      "Quick and non-stop service to your destination with minimal stops.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.nA5A7yYirDjpW7dcrVfTvwHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "VIP Bus",
    description:
      "Enjoy exclusive VIP treatment with extra legroom, gourmet snacks, and priority boarding.",
    image: "https://www.vipbus.nl/assets/images/foto13/vipbus-arnhem.jpg",
  },
  {
    id: 6,
    name: "Family Bus",
    description:
      "Perfect for family trips with ample space, entertainment options, and safety features.",
    image:
      "http://tinyhousetalk.com/wp-content/uploads/youtu.be-o7X2nOtwdUM.jpg",
  },
  {
    id: 7,
    name: "Budget Bus",
    description:
      "Travel economically without compromising on safety and comfort.",
    image:
      "https://thumbs.dreamstime.com/z/budget-bus-greenbus-company-chiangmai-thailand-september-chiangmai-chiangrai-photo-new-chiangmai-station-60695298.jpg",
  },
  {
    id: 8,
    name: "Luxury Sleeper",
    description:
      "Combining luxury and comfort for overnight journeys with deluxe sleeper facilities.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.MERAmb8mx4UH7Ci2XEc_nwHaCy&pid=Api&P=0&h=180",
  },
];

const BlogPage = () => {
  const handleMoreDetails = (busId) => {};

  return (
    <div className="Blog-Page">
      <h1 className="blogPage-header text-center my-4">Blog Page</h1>
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
                    onClick={() => handleMoreDetails(bus.id)}
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
