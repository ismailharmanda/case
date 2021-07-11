import React from "react";
import Form from "./facilities/Form";

const JoinUs = () => {
  return (
    <div
      style={{
        background: "#F5F5F5",
      }}
      className="col-12 col-md-6 p-5 mt-5"
    >
      <div className="float-md-right pt-5 mt-5">
        <h1
          style={{
            color: "#42526E",
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "34px",
          }}
        >
          Join us today!
        </h1>
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "18px",
            color: "#42526E",
          }}
        >
          Create your account now. And join our community, it’s free
        </p>
        <Form />
      </div>
    </div>
  );
};

export default JoinUs;
