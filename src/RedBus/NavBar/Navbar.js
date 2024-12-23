// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import RedBusLogo from "../images/RedBusLogo.avif";

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="HeaderBox">
//       <Container fluid className="NavContainer">
//         <Navbar.Brand>
//           <Link to="/">
//             <img src={RedBusLogo} alt="RedBus_Logo" id="Logo" />
//           </Link>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0 NavBox" navbarScroll>
//             <Link to="/Home" className="Nav-item">
//               Home
//             </Link>
//             <Link to="/About" className="Nav-item">
//               About
//             </Link>
//             <Link to="/FAQs" className="Nav-item">
//               FAQs
//             </Link>
//             <Link to="/Blog" className="Nav-item">
//               Blog
//             </Link>
//             <Link to="/Contact" className="Nav-item">
//               Contact
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//         <Link to="/Login" className="Navitem">
//           <span>Login</span>
//         </Link>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;





























































import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link } from "react-router-dom";
import "./Navbar.css";
import RedBusLogo from "../images/RedBusLogo.avif"

function NavScrollExample() {
  return (
      <Navbar expand="lg" className="HeaderBox">
        <Container fluid className="NavContainer">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={RedBusLogo}
                alt="RedBus_Logo"
                id="Logo"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 NavBox" navbarScroll>
              <Link to="/Home" className="Nav-item">
                {" "}
                Home
              </Link>
              <Link to="/About" className="Nav-item">
                About
              </Link>
              <Link to="/FAQs" className="Nav-item">
                FAQs
              </Link>
              <Link to="/Blog" className="Nav-item">
                Blog
              </Link>
              <Link to="/Contact" className="Nav-item">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/Login" className="Navitem">
            <span>Login</span>
          </Link>
        </Container>
      </Navbar>
  );
}

export default NavScrollExample;

