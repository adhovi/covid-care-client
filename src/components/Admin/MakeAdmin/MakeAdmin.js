import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
  const [loggedUserData] = useContext(UserContext);
  const { image } = loggedUserData;
  const [adminAdded, setAdminAdded] = useState(false);
  const [admin, setAdmin] = useState({ email: "" });
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = () => {
    console.log(admin);
    if (admin.email) {
      fetch("https://covid-care-server.vercel.app/makeAdmin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(admin),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setAdmin({ email: "" });
            setAdminAdded(true);
          }
        });
    }
  };

  const handleChange = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <AdminSidebar active={"makeAdmin"}></AdminSidebar>
        </div>
        <div className="col-md-9 pt-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 pb-2 rounded text-md-start text-center">
              Make Admin
            </h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="mt-3 min-height">
            <form onSubmit={handleSubmit(onSubmit)} className="py-3">
              <div className="add-product p-3 pb-5 text-md-start text-center">
                <div className="row">
                  <h6 className="px-4 py-2">Email</h6>
                  <div className="col-md-6 form-group px-4 py-2">
                    <input
                      name="email"
                      className="form-control"
                      {...register("email", {
                        required: true,
                      })}
                      defaultValue={admin.email}
                      placeholder="Enter Product Name"
                      onChange={handleChange}
                    />
                    {errors?.name && (
                      <span className="error">This Option is required</span>
                    )}
                    {adminAdded && (
                      <span className="success mt-3">
                        Admin added Successfully.
                      </span>
                    )}
                  </div>
                  <div className="col-md-3 form-group py-2">
                    <button className="btn my-btn2" type="submit">
                      Make Admin
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
