import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./Bookings.css";

const Bookings = () => {
  const [loggedUserData] = useContext(UserContext);
  const { email, image } = loggedUserData;
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://covid-care-server.vercel.app/bookings?email=${email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <Sidebar active={"bookings"}></Sidebar>
        </div>
        <div className="col-md-9 py-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 pb-2 rounded text-md-start text-center">
              Booked Services
            </h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="mt-3 min-height">
            <div className=" container ">
              <div className="row">
                {bookings.map((booking) => (
                  <div key={booking._id} className="col-md-6 mt-4">
                    <div className="bookings-card">
                      <div className="d-flex align-items-center justify-content-between">
                        <img src={booking.service.img} alt="" />
                        <div>
                          <p
                            className={
                              booking.status === "Pending"
                                ? "me-3 pending"
                                : booking.status === "Ongoing"
                                ? "me-3 on-going"
                                : "me-2 done"
                            }
                          >
                            <small>{booking.status}</small>
                          </p>
                        </div>
                      </div>
                      <h6 className="mt-4">{booking.service.name}</h6>
                      <p className="mt-3">
                        <small>{booking.service.description}</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
