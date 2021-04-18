import React from "react";
import "../../UserDashboard/Sidebar/Sidebar.css";
import logo from "../../../images/logo.png";
import admin from "../../../images/Icon/admin.png";
import manage from "../../../images/Icon/manage.png";
import bookings from "../../../images/Icon/bookings.png";
import plus from "../../../images/Icon/plus.png";
import { Link } from "react-router-dom";

const AdminSidebar = (props) => {
  const { active } = props;
  return (
    <div className="ps-md-5 ps-0 pt-3 menu-item text-md-start text-center pb-4">
      <Link className="my-link" to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="mt-md-5 mt-2 p-0 list-item">
        <Link to="/admin/orders">
          <li className={active === "orders" ? `active-bg` : ``}>
            <img src={bookings} alt="" />
            Order List
          </li>
        </Link>
        <Link to="/admin/addService">
          <li className={active === "addService" ? `active-bg` : ``}>
            <img src={plus} alt="" />
            Add Service
          </li>
        </Link>
        <Link to="/admin/makeAdmin">
          <li className={active === "makeAdmin" ? `active-bg` : ``}>
            <img src={admin} alt="" />
            Make Admin
          </li>
        </Link>
        <Link to="/admin/manageServices">
          <li className={active === "manage" ? `active-bg` : ``}>
            <img src={manage} alt="" />
            Manage Services
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
