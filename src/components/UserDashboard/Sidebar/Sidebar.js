import React from "react";
import "./Sidebar.css";
import logo from "../../../images/logo.png";
import cart from "../../../images/Icon/cart.png";
import bookings from "../../../images/Icon/bookings.png";
import review from "../../../images/Icon/review.png";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { active } = props;
  return (
    <div className="ps-md-5 ps-0 pt-3 menu-item text-md-start text-center pb-4">
      <Link className="my-link" to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="mt-md-5 mt-2 p-0 list-item">
        <li className={active === "book" ? `active-bg` : ``}>
          <img src={cart} alt="" />
          Book
        </li>
        <Link to="/dashboard/bookings">
          <li className={active === "bookings" ? `active-bg` : ``}>
            <img src={bookings} alt="" />
            Booking List
          </li>
        </Link>
        <Link to="/dashboard/addReview">
          <li className={active === "review" ? `active-bg` : ``}>
            <img src={review} alt="" />
            Review
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
