import React from "react";
import "./Symptom.css";

const Symptom = ({ symptom }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card text-center symptom-card">
        <div className="my-img symptom-img">
          <img
            src={symptom.img}
            className="card-img-top p-5 pb-2"
            alt={symptom.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title bolder service-title">{symptom.title}</h5>
          <p className="card-text mt-1 px-4 pb-3 my-text">
            <small>{symptom.description}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symptom;
