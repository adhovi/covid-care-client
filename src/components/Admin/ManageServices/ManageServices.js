import React, { useContext, useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import deleteIcon from "../../../images/Icon/delete.png";
import "./ManageServices.css";
import { UserContext } from "../../../App";

const ManageServices = () => {
  const [loggedUserData] = useContext(UserContext);
  const { image } = loggedUserData;
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://covid-medi-care.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const deleteService = (id) => {
    console.log(id);
    fetch(`https://covid-medi-care.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <AdminSidebar active={"manage"}></AdminSidebar>
        </div>
        <div className="col-md-9 py-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 pb-2 rounded text-md-start text-center">
              Manage Services
            </h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="mt-3 min-height">
            <div className="add-product px-4 mt-3 text-md-start text-center">
              <div className="row p-2 pt-3 my-2 my-title">
                <div className="col-md-4 ps-md-4 ps-0">
                  <h6>Name</h6>
                </div>
                <div className="col-md-4 text-center">
                  <h6>Price</h6>
                </div>
                <div className="col-md-4 text-center">
                  <h6>Action</h6>
                </div>
              </div>
              {services.map((service) => {
                return (
                  <div
                    className="row mt-md-3 mt-3 p-2 d-flex align-items-center"
                    key={service._id}
                  >
                    <div className="col-md-4 ps-md-4 ps-0">
                      <h6>{service.name}</h6>
                    </div>
                    <div className="col-md-4 text-center">
                      ৳ {service.price}
                    </div>
                    <div className="col-md-4 text-center">
                      <button
                        className="btn p-0 action"
                        onClick={() => deleteService(service._id)}
                      >
                        <img
                          className="img-fluid"
                          src={deleteIcon}
                          alt=""
                        ></img>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
