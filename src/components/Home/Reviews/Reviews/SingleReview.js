import React from "react";
import avatar from "../../../../images/avatar.png";
import star from "../../../../images/star.png";
import "./Review.css";

const SingleReview = ({ review }) => {
  return (
    <div className="col-md-4 mb-5 d-flex justify-content-start">
      <div className="review-card">
        <div className="identity d-flex align-items-center">
          <img
            src={review.image || avatar}
            className="img-fluid pro-pic"
            alt=""
          />
          <div className="ms-3">
            <h5>{review.userName}</h5>
            <h6>{review.designation}</h6>
          </div>
        </div>
        <p className="review-paragraph mt-4">{review.description} </p>
        <img src={star} className=" img-fluid mb-3 mt-2" alt="" />
      </div>
    </div>
  );
};

export default SingleReview;
