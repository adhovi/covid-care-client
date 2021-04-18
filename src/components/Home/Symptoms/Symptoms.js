import React from "react";
import img1 from "../../../images/01.jpg";
import img2 from "../../../images/02.jpg";
import img3 from "../../../images/03.jpg";
import img4 from "../../../images/04.jpg";
import img5 from "../../../images/05.jpg";
import img6 from "../../../images/06.jpg";
import Symptom from "./Symptom";

const symptoms = [
  {
    id: 1,
    title: "Coughing And Sneezing",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img1,
  },
  {
    id: 2,
    title: "Hot Fever",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img2,
  },
  {
    id: 1,
    title: "Strong Headache",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img3,
  },
  {
    id: 1,
    title: "Shortness of Breath",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img4,
  },
  {
    id: 1,
    title: "Confusion",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img5,
  },
  {
    id: 1,
    title: "Sore Throat",
    description:
      "Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.",
    img: img6,
  },
];

const Symptoms = () => {
  return (
    <div className="container mb-5" id="symptoms">
      <h2 className="sub-heading text-center space-60px">
        Corona Virus <span className="blue">Symptoms</span>
      </h2>
      <p className="paragraph text-center">
        <small>Some Basic Symptoms to identify Corona.</small>
      </p>
      <div className="row mt-2 px-5">
        {symptoms.map((symptom) => {
          return <Symptom key={symptom._id} symptom={symptom}></Symptom>;
        })}
      </div>
    </div>
  );
};

export default Symptoms;
