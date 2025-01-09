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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const { userProfileRTFB, setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);
  const navigate = useNavigate();

  const isUserLoggedIn = userProfileRTFB?.name !== undefined;
  const username = userProfileRTFB?.name || "user";

  const handleLogout = () => {
    setUserProfileRTFB(null);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="HeaderBox">
      <Container fluid>
        <div className="HeaderRow">
          <Link to="/" className="NavbarLogo">
            <img src={RedBusLogo} alt="RedBus_Logo" id="Logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
          />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="NavBox" navbarScroll>
            <Link to="/Home" className="Nav-item">
              Home
            </Link>
            <Link to="/About" className="Nav-item">
              About
            </Link>
            <Link to="/Blog" className="Nav-item">
              Blog
            </Link>
            <Link to="/Contact" className="Nav-item">
              Contact
            </Link>

            {isUserLoggedIn ? (
              <>
                <Link to="/profile" className="Nav-item HiddenOnLarge">
                  Profile
                </Link>
                <Link to="/login" className="Nav-item HiddenOnLarge" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="Nav-item HiddenOnLarge">
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
                <Dropdown.Item onClick={() => navigate("/profile")}>
                  Booked Seats
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </>
            ) : (
              <Dropdown.Item as={Link} to="/login">
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

