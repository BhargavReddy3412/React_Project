 // AboutPage.js
import React, { useState } from "react";
import "./AboutPage.css";

function AboutPage() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
      <main>
        <section className="AboutPagecontent">
          <div className="AboutPage-booking-info">
            <h2 className="AboutPage-Heading">Online bus booking</h2>
            <p>
              Online bus booking provides a bus transportation system, a facility to reserve seats, 
              cancel seats, and make various types of inquiries requiring quick reservations. 
              It is a web software solution designed to provide customers with a personalized, 
              easy-to-utilize user experience for booking and purchasing tickets online. 
              It stores customer data, scheduled routes, and other information.
            </p>
            {showMore && (
              <div className="AboutPage-more-content">
                <p>
                  Our online bus booking system makes it easy for users to book their tickets 
                  from the comfort of their home. You can also check bus schedules, availability, 
                  and prices in real-time. With our user-friendly interface, you can manage your 
                  bookings effortlessly. We ensure a secure and hassle-free booking experience 
                  for all our customers.
                </p>
                <p>
                  Additionally, we offer customer support 24/7 to assist you with any queries or 
                  issues. We are committed to providing a seamless travel experience. Start booking 
                  your bus tickets online today and enjoy a convenient and efficient way to travel.
                </p>
              </div>
            )}
            <div className="AboutPage-buttons">
              <button onClick={handleReadMore} className="AboutPage-button">
                {showMore ? "Show Less" : "Read More"}
              </button>
              <a href="#contact-us" className="AboutPage-button">Contact Us</a>
            </div>
          </div>
          <div className="AboutPage-bus-image">
            <img src="https://freepngimg.com/thumb/bus/3-2-bus-picture.png" alt="Bus" />
          </div>
        </section>
      </main>
  );
}

export default AboutPage;
