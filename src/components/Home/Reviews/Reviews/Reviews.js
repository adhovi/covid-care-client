import React, { useEffect } from "react";
import "./Review.css";
import { useState } from "react";
// import ReviewCarousel from "./ReviewCarousel";
import SingleReview from "./SingleReview";

// const reviewData = [
//   {
//     _id: 1,
//     userName: "Abdul Hasib Ovi",
//     designation: "Google, CEO",
//     description: "Here is a good",
//   },
//   {
//     _id: 2,
//     userName: "Abdul Hasib Ovi",
//     designation: "Google, CEO",
//     description: "Here is a good",
//   },
//   {
//     _id: 3,
//     userName: "Abdul Hasib Ovi",
//     designation: "Google, CEO",
//     description: "Here is a good",
//   },
//   {
//     _id: 4,
//     userName: "Abdul Hasib Ovi",
//     designation: "Google, CEO",
//     description: "Here is a good",
//   },
//   {
//     _id: 5,
//     userName: "Abdul Hasib Ovi",
//     designation: "Google, CEO",
//     description: "Here is a good",
//   },
// ];

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://covid-care-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  console.log(reviewData);

  return (
    <div className="ash-bg light-bg">
      <div className="container" id="reviews">
        <h2 className="sub-heading text-center space-60px">
          Client <span className="blue">Reviews</span>
        </h2>
        <p className="paragraph text-center mb-5">
          <small>Worldwide tracked cases.</small>
        </p>
        <div className="row">
          {reviewData.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </div>

        {/* <ReviewCarousel
        key={1}
        reviews={reviews}
        carouselItem={3}
      ></ReviewCarousel> */}
      </div>
    </div>
  );
};

export default Reviews;
