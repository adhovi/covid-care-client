import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import heroImage from "../../../../images/heroImage.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center pt-md-0 pt-5">
        <div className="col-md-6 text-md-start text-center">
          <h1 className="title redish">covid-19</h1>
          <h1 className="title">medical assistant</h1>
          <p className="paragrapgh mt-4">
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020.
          </p>
          <button className="btn my-btn mt-2">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                className="icon me-2"
                icon={faShieldAlt}
              ></FontAwesomeIcon>{" "}
              How To Protect
            </div>
          </button>
        </div>
        <div className="col-md-6 mt-md-0 mt-5 d-flex justify-content-center">
          <img className="img-fluid" src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
