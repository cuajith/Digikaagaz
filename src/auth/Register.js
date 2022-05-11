import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./auth.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    reset();
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5 shadow">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <img
                src="./images/frontimage.webp"
                className="signup-page-image"
              />
            </div>
            <div className="col-sm-6 round pb-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <h4 className="">DigiKaagaz</h4>
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullname && "invalid"} h-25`}
                    {...register("fullName", {
                      required: "Full Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("fullName");
                    }}
                  />
                  {errors.fullName && (
                    <small className="text-danger">
                      {errors.fullName.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.userName && "invalid"} h-25`}
                    {...register("userName", {
                      required: "User Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("userName");
                    }}
                  />
                  {errors.userName && (
                    <small className="text-danger">
                      {errors.userName.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.email && "invalid"} h-25`}
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password && "invalid"} h-25`}
                    {...register("password", {
                      required: "Password is Required",
                      pattern: {
                        value: "",
                        message: "Enter valid password",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("password");
                    }}
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Phone:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.mobileNumber && "invalid"
                    } h-25`}
                    {...register("mobileNumber", {
                      required: "Phone is Required",
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid mobile number",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("mobileNumber");
                    }}
                  />
                  {errors.mobileNumber && (
                    <small className="text-danger">
                      {errors.mobileNumber.message}
                    </small>
                  )}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary my-3 w-100 h-25"
                  value="Submit"
                />
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                  Already have an account? &nbsp; <a href="/login">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
