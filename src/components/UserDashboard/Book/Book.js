import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Book.css";

import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useHistory, useParams } from "react-router-dom";
import Payment from "../Payment/Payment";

const Book = () => {
  const { id } = useParams();
  const [loggedUserData] = useContext(UserContext);
  const { userName, email, image } = loggedUserData || {};

  const history = useHistory();

  const [selectedService, setSelectedService] = useState([]);
  const [booking, setBooking] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState("");

  useEffect(() => {
    fetch(`https://covid-medi-care.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedService(data[0]);
        const newBooking = { ...booking };
        newBooking.userName = loggedUserData.userName;
        newBooking.email = loggedUserData.email;
        newBooking.status = "Pending";
        newBooking.service = { ...selectedService };
        newBooking.payment = paymentSuccess;
        delete newBooking.service._id;

        setBooking(newBooking);
      })
      .catch((error) => console.log(error));
  }, [paymentSuccess]);
  const { handleSubmit } = useForm();

  const handlePayment = () => {
    const newBooking = { ...booking };
    console.log(paymentSuccess);
    newBooking.payment = paymentSuccess;
    setBooking(newBooking);
    console.log(booking);
  };

  const onSubmit = () => {
    if (booking.service) {
      console.log(booking);
      handlePayment();
      fetch("https://covid-medi-care.herokuapp.com/addBooking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(booking),
      }).then((res) => {
        if (res.ok) {
          const newBooking = { ...booking };
          newBooking.userName = "";
          newBooking.email = "";
          newBooking.status = "";
          newBooking.service = {};
          setBooking(newBooking);
          history.push("/dashboard/bookings");
        }
      });
    }
  };
  const handleChange = (e) => {
    console.log("changed");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <Sidebar active={"book"}></Sidebar>
        </div>
        <div className="col-md-9 pt-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 text-md-start text-center">Book</h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="min-height mt-3">
            <form onSubmit={handleSubmit(onSubmit)} className="py-3">
              <div className="add-product p-3 text-md-start text-center">
                <div className="row">
                  <div className="col-md-8 form-group px-4 py-2">
                    <input
                      name="userName"
                      className="form-control"
                      defaultValue={userName || ""}
                      readOnly
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 form-group px-4 py-2">
                    <input
                      name="email"
                      className="form-control"
                      defaultValue={email || ""}
                      readOnly
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 form-group px-4 py-2">
                    <input
                      name="name"
                      className="form-control"
                      defaultValue={selectedService?.name || ""}
                      readOnly
                      placeholder="Service Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* {
                <span className="success mt-3">
                  Product added Successfully.
                </span>
              } */}
              {!paymentSuccess && (
                <h6 className=" ps-3 pt-4 text-md-start text-center">
                  Your Service charged will be <b>৳{selectedService.price}</b>
                </h6>
              )}
              {paymentSuccess && (
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group d-flex justify-content-md-end justify-content-center mt-4 me-3">
                      <button className="btn my-btn" type="submit">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
            <h6 className=" ps-3 pt-3 text-md-start text-center">Pay with</h6>
            <div className="row px-5 mt-5 mb-2">
              <div className="col-md-8">
                <Payment
                  booking={booking}
                  setBooking={setBooking}
                  paymentSuccess={paymentSuccess}
                  setPaymentSuccess={setPaymentSuccess}
                ></Payment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
