import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserCircle } from "react-icons/fa"; // Importing user profile icon
import "./Navbar.css";
import RedBusLogo from "../images/RedBusLogo.avif";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="HeaderBox">
      <Container fluid>
        {/* Common Header Layout */}
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
            <Link to="/profile" className="Nav-item HiddenOnLarge">
              Profile
            </Link>
            <Link to="/logout" className="Nav-item HiddenOnLarge">
              Logout
            </Link>
          </Nav>

          <DropdownButton
            align="end"
            id="dropdown-user-profile"
            variant="link"
            className="Navitem HiddenOnSmall"
            drop="start"
            title={<FaUserCircle size={30} />}
          >
             <Dropdown.Item >
               VAmsi
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/logout">
              Logout
            </Dropdown.Item>
          </DropdownButton>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
