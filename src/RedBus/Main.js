 import NavScrollExample from "./NavBar/Navbar";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/Aboutpage";
import BlogPage from "./BlogPage/BlogPage";
import ContactPage from "./ContactPage/ContactPage";
import Footer from "./Footer/Footer";
import FindRoutes from "./FindBuses/FindingRoutes";
import TextExample from "./BookingSeat/SeatBooking"
import PassengerDetails from "./PassengerDetails/PassengerDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TravelProvider } from "./API/ContextApi/ContextApi";
import PaymentComp from "./Payment/PaymentComp";
import SignupForm from "./CustomerAthendication/SignupPage/Signup";
import LoginForm from "./CustomerAthendication/LoginPage/LoginPage";
import TicketBookedComp from "./TickedBooked/TicketBookedComp";
import { UserProfileInfoRTFBProvider } from "./API/ContextApi/RealTimeDataBaseUserProfile";

import UserProfile from "./UserProfile/UserProfile";

export default function RedbusAllFiles() {
  return (
    <Router>
       <TravelProvider>
       <UserProfileInfoRTFBProvider>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Home/routes/" element={<FindRoutes />} />
        <Route path="/Home/BookSeat" element={<TextExample/>} />
        <Route path="/Home/Details" element={<PassengerDetails/>}/>
        <Route path="/Home/Payment" element={<PaymentComp />}/>
        <Route path="/Home/TicketConform" element={<TicketBookedComp/>}/>  
        <Route path="/profile" element={<UserProfile />} />
  
      </Routes>
      <Footer />
      </UserProfileInfoRTFBProvider>
      </TravelProvider>
 
    </Router>
    
  );
}

 
 