import React from "react";
import "./LiveUpdate.css";

const coronaData = [
  {
    id: 1,
    count: "139M+",
    type: "Confirmed",
  },
  {
    id: 2,
    count: "118M+",
    type: "Recovered",
  },
  {
    id: 3,
    count: "29M+",
    type: "Deaths",
  },
  {
    id: 4,
    count: "221+",
    type: "Countries",
  },
];

const LiveUpdate = () => {
  return (
    <div className="header-container pt-2 pb-4 mt-5" id="statistics">
      <h2 className="sub-heading text-center space-60px">
        Live Case <span className="blue">Tracker</span>
      </h2>
      <p className="paragraph text-center">
        <small>Worldwide tracked cases.</small>
      </p>
      <div className="container">
        <div className="row pb-5 mt-5">
          {coronaData.map((data) => {
            return (
              <div key={data.id} className="col-md-3 mt-md-0 mt-4">
                <div className="card text-center p-4 corona-card">
                  <div className="card-body">
                    <div className="">
                      <h2 className="card-title redish bold">{data.count}</h2>
                      <h5 className="card-title sub-title">{data.type}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LiveUpdate;
