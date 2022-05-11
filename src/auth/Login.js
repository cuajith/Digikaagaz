import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loginwithgoogle from "./Loginwithgoogle";
import Facebooklogin from "./Facebooklogin";

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
      .post("http://localhost:5000/api/login", data)
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
      <div className="row justify-content-sm-center pt-5">
        <div className="col-11">
          <div className="row">
            <div
              className="col-sm-6 rounded mb-0"
              style={{ background: "#afeeee", padding: "25px" }}
            >
              <h2 className="digikaagaz-login">DigiKaagaz</h2>
            </div>

            <div
              className="col-sm-5 round pb-3 rounded mb-0"
              style={{
                background: "#fff",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                padding: "25px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <h4 className="Log-in">Log in</h4>
                <p className="Login-para">
                  Enter your credentails to access your account.
                </p>
                <div style={{ }}>
                  <Loginwithgoogle />
                  <Facebooklogin />
                </div>
                <span className="or-option">
                  <hr /> <p>or</p> <hr />
                </span>
                <div className="form-group">
                  <label
                    className="col-form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    style={{ fontSize: "12px" }}
                    className={`form-control ${errors.email && "invalid"}`}
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
                    placeholder="password"
                    style={{ fontSize: "12px" }}
                    className={`form-control ${errors.password && "invalid"}`}
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

                <input
                  type="submit"
                  className="btn btn-primary my-3 w-100"
                  value="Login"
                  style={{ fontSize: "12px" }}
                />

                <p style={{ fontSize: "12px" }}>
                  Not a member? &nbsp; <a href="/signin">Sign up</a>
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
