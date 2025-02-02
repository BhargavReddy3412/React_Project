 import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserCircle } from "react-icons/fa"; // Importing user profile icon
import "./Navbar.css";
import RedBusLogo from "../images/RedBusLogo.avif";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const { userProfileRTFB, setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false); // State to control Navbar collapse
  const isUserLoggedIn = userProfileRTFB?.name !== undefined;
  const username = userProfileRTFB?.name || "user";

  const handleLogout = () => {
    setUserProfileRTFB(null);
    localStorage.clear();
    navigate("/login");
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar expand="lg" className="HeaderBox" expanded={expanded}>
      <Container fluid>
        <div className="HeaderRow">
          <Link to="/" className="NavbarLogo">
            <img src={RedBusLogo} alt="RedBus_Logo" id="Logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
            onClick={() => setExpanded(!expanded)} // Toggle navbar state on click
          />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="NavBox" navbarScroll>
            <Link to="/Home" className="Nav-item" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/About" className="Nav-item" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/Blog" className="Nav-item" onClick={handleLinkClick}>
              Blog
            </Link>
            <Link to="/Contact" className="Nav-item" onClick={handleLinkClick}>
              Contact
            </Link>

            {isUserLoggedIn ? (
              <>
                <Link to="/profile" className="Nav-item HiddenOnLarge" onClick={handleLinkClick}>
                  Profile
                </Link>
                <Link to="/login" className="Nav-item HiddenOnLarge" onClick={() => { handleLogout(); handleLinkClick(); }}>
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="Nav-item HiddenOnLarge" onClick={handleLinkClick}>
                Login
              </Link>
            )}
          </Nav>

          <DropdownButton
            align="end"
            id="dropdown-user-profile"
            variant="link"
            className="Navitem HiddenOnSmall"
            drop="start"
            title={<FaUserCircle size={30} />}
          >
            {isUserLoggedIn ? (
              <>
                <Dropdown.Item>{username}</Dropdown.Item>
                <Dropdown.Item onClick={() => { navigate("/profile"); handleLinkClick(); }}>
                  Booked Seats
                </Dropdown.Item>
                <Dropdown.Item onClick={() => { handleLogout(); handleLinkClick(); }}>
                  Logout
                </Dropdown.Item>
              </>
            ) : (
              <Dropdown.Item as={Link} to="/login" onClick={handleLinkClick}>
                Login
              </Dropdown.Item>
            )}
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;


 