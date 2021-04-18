import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container pt-5 text-white">
      <div className="container py-3 pb-5">
        <div className="row">
          <div className="col-md-3  d-flex">
            <FontAwesomeIcon
              className="mt-1 me-3"
              icon={faMapMarkerAlt}
            ></FontAwesomeIcon>
            <p className="fw-lighter">
              <small>
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </small>
            </p>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="mt-3">
              <li>About</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Terms & Conditions</li>
              <li>Submit Issues</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="mt-3">
              <li>Bookings</li>
              <li>Reviews</li>
              <li>Sales</li>
              <li>Contact</li>
              <li>Out Blogs</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>About Us</h5>
            <p className="fw-lighter mt-3">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </small>
            </p>
            <p className="mt-3 icon-container">
              <FontAwesomeIcon
                className="icon"
                icon={faFacebookSquare}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faInstagram}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faLinkedin}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="icon"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center">
        <small>Developed by OVI</small>
      </p>
    </div>
  );
};

export default Footer;
