import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserCircle } from "react-icons/fa"; // Importing user profile icon
import "./Navbar.css";
import RedBusLogo from "../images/RedBusLogo.avif";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";
import { signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../FireBase_Folder/FireBase";


function NavScrollExample() {
  const auth = getAuth(app);
  const userProfileRTFB = useContext(UserProfileInfoRTFBContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userProfileRTFB.setUserProfileRTFB({ name: user.displayName || "User" });
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate, userProfileRTFB]);

  const isUserLoggedIn = userProfileRTFB.userProfileRTFB?.name !== undefined;
  let username = userProfileRTFB.userProfileRTFB?.name || "user";

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        userProfileRTFB.setUserProfileRTFB({});
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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
                <Dropdown.Item as={Link} to="/login" onClick={handleLogout}>
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


