import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { UserContext } from "../../../../App";
import logo from "../../../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [loggedUserData, settLoggedUserData] = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    fetch("https://covid-medi-care.herokuapp.com/admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedUserData.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newUserData = { ...loggedUserData };
          newUserData.role = "admin";
          settLoggedUserData(newUserData);
        }
      });
  }, []);
  console.log(loggedUserData);

  const gotoLogin = () => {
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light my-nav fixed-top mb-md-0 mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt=""></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#statistics">
                Statistics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#symptoms">
                Symptoms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>
            {loggedUserData.role !== "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/bookings">
                  Dashboard
                </Link>
              </li>
            )}
            {loggedUserData.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/orders">
                  Admin
                </Link>
              </li>
            )}
            {loggedUserData.isLoggedIn && (
              <li className="nav-item img-item">
                <Link to="" className="nav-link disabled">
                  <img
                    className="ms-1 pro-pic"
                    src={loggedUserData.image}
                    alt=""
                  ></img>
                </Link>
              </li>
            )}

            <li className="nav-item">
              {loggedUserData.isLoggedIn ? (
                <button
                  onClick={loggedUserData.handleSignOut}
                  className="mt-md-0 mt-3 ms-md-3 ms-0 btn my-btn2"
                  to=""
                >
                  Logout
                </button>
              ) : (
                <button
                  className="mt-md-0 mt-3 ms-md-3 ms-0 btn my-btn2"
                  onClick={gotoLogin}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
