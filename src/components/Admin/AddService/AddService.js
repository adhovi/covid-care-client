import React, { useContext, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./AddService.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const AddService = () => {
  const [loggedUserData] = useContext(UserContext);
  const { image } = loggedUserData;
  const [serviceAdded, setServiceAdded] = useState(false);
  const [serviceDetail, setServiceDetail] = useState({
    name: null,
    price: null,
    description: null,
    img: null,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = () => {
    if (name && price && description && img) {
      fetch("https://covid-care-server.vercel.app/addService", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(serviceDetail),
      }).then((res) => {
        if (res.ok === true) {
          const newProduct = { ...serviceDetail };
          newProduct.name = null;
          newProduct.price = null;
          newProduct.description = null;
          newProduct.img = null;
          setServiceDetail(newProduct);
        }
        res.ok && setServiceAdded(true);
      });
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "img") {
      const imageData = new FormData();
      imageData.set("key", "cab69cdca5cf6c27b8fde98ad6de678b");
      imageData.append("image", e.target.files[0]);
      fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: imageData,
      })
        .then((res) => res.json())
        .then((data) => {
          const newDetail = { ...serviceDetail };
          newDetail.img = data.data.image.url;
          setServiceDetail(newDetail);
        });
    } else {
      const newDetail = { ...serviceDetail };
      newDetail[e.target.name] = e.target.value;
      setServiceDetail(newDetail);
    }
    setServiceAdded(false);
  };
  const { name, price, description, img } = serviceDetail;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menubar p-0 pt-4 position-sticky">
          <AdminSidebar active={"addService"}></AdminSidebar>
        </div>
        <div className="col-md-9 pt-4 px-md-5 px-3 dark-bg">
          <div className="d-flex">
            <h3 className="ps-3 pt-2 pb-2 rounded text-md-start text-center">
              Add Service
            </h3>
            <div className="img-item ms-auto me-3">
              <img className="img-fluid pro-pic" src={image} alt=""></img>
            </div>
          </div>
          <div className="mt-3 min-height">
            <form onSubmit={handleSubmit(onSubmit)} className="py-3">
              <div className="add-product p-3 text-md-start text-center">
                <div className="row">
                  <div className="col-md-6 form-group px-4 py-2">
                    <h6>Service Title</h6>
                    <input
                      name="name"
                      className="form-control"
                      {...register("name", {
                        required: true,
                      })}
                      defaultValue={name}
                      placeholder="Enter Product Name"
                      onChange={handleChange}
                    />
                    {errors?.name && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>

                  <div className="col-md-6 form-group px-4 py-2">
                    <h6>Product Price</h6>
                    <input
                      name="price"
                      className="form-control"
                      {...register("price", {
                        required: true,
                      })}
                      defaultValue={price}
                      placeholder="Enter Product Price"
                      onChange={handleChange}
                    />
                    {errors?.price && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group px-4 py-2">
                    <h6>Description</h6>
                    <textarea
                      style={{ height: "100px" }}
                      name="description"
                      className="form-control"
                      {...register("description", {
                        required: true,
                      })}
                      defaultValue={description}
                      placeholder="Enter Product Weight"
                      onChange={handleChange}
                    />
                    {errors?.description && (
                      <span className="error">This Option is required</span>
                    )}
                  </div>
                  <div className="col-md-6 form-group px-4 py-2">
                    <h6>Product Image</h6>
                    <input
                      type="file"
                      name="img"
                      className="form-control"
                      {...register("img", {
                        required: true,
                      })}
                      defaultValue={img}
                      placeholder="Enter Product Image"
                      onChange={handleChange}
                    />
                    {errors?.img && (
                      <span className="error">This Option is required. </span>
                    )}
                    {img ? (
                      <span className="success">Image added Successfully.</span>
                    ) : (
                      <span className="error">
                        After Selection Image wait the upload confirmation.
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {serviceAdded && (
                <span className="success mt-3">
                  Service added Successfully.
                </span>
              )}
              <div className="form-group d-flex justify-content-md-end justify-content-center mt-4">
                <button className="btn my-btn" type="submit">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
