import React, { useContext, useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";

const Services = () => {
  const [loggedUserData] = useContext(UserContext);
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("https://covid-medi-care.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <div className="container" id="services">
      <h2 className="sub-heading text-center space-60px">
        Our Instant <span className="blue">Services</span>
      </h2>
      <p className="paragraph text-center">
        <small>We provide best quality medical services.</small>
      </p>
      <div className="row mt-5">
        {servicesData.map((service) => {
          return (
            <div key={service._id} className="col-md-4 service">
              <Link
                to={
                  loggedUserData.role === "admin"
                    ? `/admin/orders`
                    : `/booking/${service._id}`
                }
              >
                <div className="card text-center my-card">
                  <div className="my-img mb-3">
                    <img
                      src={service.img}
                      className="card-img-top"
                      alt={service.name}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title bolder service-title">
                      {service.name}
                    </h5>
                    <h5 className="card-title blue">৳ {service.price}</h5>
                    <p className="card-text mt-3 px-3 pb-3 my-text">
                      <small>{service.description}</small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-5 text-center">
        <button className="btn my-btn">
          <small>Explore More</small>
        </button>
      </div>
    </div>
  );
};

export default Services;
