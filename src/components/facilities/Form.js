import React from "react";
import FacebookIcon from "../../images/FacebookIcon";
const Form = () => {
  return (
    <div className="">
      <form className="my-5">
        <div className="form-group mb-2">
          <label className="mb-0" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            className="form-control mb"
            id="name"
            aria-describedby="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-0" htmlFor="email">
            Your Mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-0" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check mb-2">
          <input type="checkbox" className="form-check-input" id="agree" />
          <label className="form-check-label" htmlFor="agree">
            I agree
          </label>
        </div>
        <button
          style={{
            background: "#0052CC",
            borderRadius: "8px",
          }}
          type="submit"
          className="btn btn-primary btn-lg btn-block mb-3"
        >
          Create accounts
        </button>
        <a
          href="/#"
          style={{
            textDecoration: "none",
          }}
        >
          <small
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "14px",
              color: "#42526E",
            }}
          >
            Forget password?
          </small>
        </a>
        <div className="strike mb-3">
          <span
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "14px",
              color: "#42526E",
            }}
          >
            or sign up with
          </span>
        </div>
        <button
          style={{
            height: "3rem",
            color: "#0052CC",
            borderRadius: "8px",
          }}
          href="/#"
          className="btn btn-outline-primary btn-block btn-social text-center"
        >
          <FacebookIcon /> Facebook
        </button>
      </form>
    </div>
  );
};

export default Form;
