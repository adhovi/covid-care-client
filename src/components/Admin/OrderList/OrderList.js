import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./OrderList.css";

const OrderList = () => {
  const [loggedUserData] = useContext(UserContext);
  const { image } = loggedUserData;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://covid-care-server.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (status) => {
    const data = { id: selectedOrder._id, status };
    console.log(data);

    // Updating Data to DataContext
    const newOrders = [...orders];
    const modifiedData = { ...selectedOrder };
    modifiedData.status = status;
    const selectedIndex = newOrders.indexOf(selectedOrder);

    newOrders.splice(selectedIndex, 1, modifiedData);
    setOrders(newOrders);

    // Storing Data in database
    fetch("https://covid-care-server.vercel.app/updateOrderStatus", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
        console.log(orders);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <AdminSidebar active={"orders"}></AdminSidebar>
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
            <div className="add-product px-4 mt-3 text-md-start text-center">
              <div className="row p-2 pt-3 my-2 my-title">
                <div className="col-md-2">
                  <h6>Name</h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>Email Id</h6>
                </div>
                <div className="col-md-3 text-center">
                  <h6>Service</h6>
                </div>
                <div className="col-md-2 text-center">
                  <h6>Pay With</h6>
                </div>
                <div className="col-md-2 text-center">
                  <h6>Status</h6>
                </div>
              </div>
              {orders.map((order) => {
                return (
                  <div className="row mt-md-3 mt-3 p-2" key={order._id}>
                    <div className="col-md-2">
                      <h6>{order.userName}</h6>
                    </div>
                    <div className="col-md-3 text-center">{order.email}</div>
                    <div className="col-md-3 text-center">
                      {order.service.name}
                    </div>
                    <div className="col-md-2 text-center">Credit Card</div>
                    <div className="col-md-2 text-center">
                      <select
                        style={{ border: "none", outline: "none" }}
                        onClick={() => setSelectedOrder(order)}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className={
                          order.status === "Pending"
                            ? "text-danger form-group"
                            : order.status === "Ongoing"
                            ? "text-warning form-group"
                            : "text-success form-group"
                        }
                      >
                        <option
                          selected={order.status === "Pending"}
                          className="bg-white text-secondary"
                        >
                          Pending
                        </option>
                        <option
                          selected={order.status === "Ongoing"}
                          className="bg-white text-secondary"
                        >
                          Ongoing
                        </option>
                        <option
                          selected={order.status === "Done"}
                          className="bg-white text-secondary"
                        >
                          Done
                        </option>
                      </select>
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

export default OrderList;
