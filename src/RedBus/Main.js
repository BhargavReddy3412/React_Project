 import NavScrollExample from "./NavBar/Navbar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Footer/Footer";
import FindRoutes from "./FindBuses/FindingRoutes";
import TextExample from "./BookingSeat/SeatBooking"
import PassengerDetails from "./PassengerDetails/PassengerDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RedbusAllFiles() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        {/* <Route path="/About" element={<About />} /> */}
        {/* <Route path="/FAQs" element={<FAQs />} /> */}
        {/* <Route path="/Blog" element={<Blog />} /> */}
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Home/routes" element={<FindRoutes />} />
        <Route path="/Home/BookSeat" element={<TextExample/>} />
        <Route path="/Home/Details" element={<PassengerDetails/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
