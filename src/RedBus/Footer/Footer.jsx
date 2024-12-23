import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 Footer">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
