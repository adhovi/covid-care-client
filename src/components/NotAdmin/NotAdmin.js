import React from "react";
import { Link } from "react-router-dom";

const NotAdmin = () => {
  return (
    <div className="container">
      <div className="row not-height d-flex align-items-center justify-content-center">
        <div className="col-md-4">
          <div className="not-found d-flex align-items-center justify-content-center ">
            <div>
              <h1 className="display-4">Error!</h1>
              <p className="lead">Admin Access Only</p>
              <Link className="btn my-btn" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAdmin;
