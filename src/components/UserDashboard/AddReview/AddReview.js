import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AddReview.css";

import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useHistory } from "react-router-dom";

const AddReview = () => {
  const history = useHistory();
  const [loggedUserData] = useContext(UserContext);
  const { userName, image } = loggedUserData || {};
  console.log(userName, image);
  const [review, setReview] = useState({
    image: image,
    userName: userName,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = () => {
    if (review.userName && review.designation && review.description) {
      fetch("https://covid-care-server.vercel.app/addReview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(review),
      }).then((res) => {
        if (res.ok) {
          history.push("/");
        }
      });
    }
    console.log(review);
  };

  const handleChange = (e) => {
    const newReviewData = { ...review };
    newReviewData[e.target.name] = e.target.value;
    setReview(newReviewData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <Sidebar active={"review"}></Sidebar>
        </div>
        <div className="col-md-9 pt-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 pb-2 rounded  text-md-start text-center">
              Add a Review
            </h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="mt-3 min-height">
            <form onSubmit={handleSubmit(onSubmit)} className="py-3">
              <div className="add-product p-3 text-md-start text-center">
                <div className="row">
                  <div className="col-md-8 form-group px-4 py-2">
                    <input
                      name="userName"
                      className="form-control"
                      {...register("userName", {
                        required: true,
                      })}
                      defaultValue={userName || ""}
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                    />
                    {errors?.userName && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>
                  <div className="col-md-8 form-group px-4 py-2">
                    <input
                      name="designation"
                      className="form-control"
                      {...register("designation", {
                        required: true,
                      })}
                      defaultValue={""}
                      placeholder="Company's Name, Designation"
                      onChange={handleChange}
                    />
                    {errors?.designation && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 form-group px-4 py-2">
                    <textarea
                      style={{ height: "150px" }}
                      name="description"
                      className="form-control"
                      {...register("description", {
                        required: true,
                      })}
                      defaultValue={""}
                      placeholder="Description"
                      onChange={handleChange}
                    />
                    {errors?.description && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>
                </div>
              </div>
              {/* {
                <span className="success mt-3">
                  Product added Successfully.
                </span>
              } */}
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group d-flex justify-content-md-end justify-content-center mt-4 me-3">
                    <button className="btn my-btn" type="submit">
                      Add Review
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
