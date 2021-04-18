import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className=" ash-bg">
      <div className="container">
        <div className="row py-5 text-md-start text-center">
          <div className="col-md-5">
            <h3 className="title ">sign up for news-letter</h3>
          </div>
          <div className="col-md-7 mt-md-0 mt-3">
            <div className="row ">
              <div className="col-md-8">
                <input className="form-control" type="email" name="email" />
              </div>
              <div className="col-md-4 mt-md-0 mt-3">
                <button className="btn my-btn2">
                  <small>Sign Up</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
