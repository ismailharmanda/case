import React from "react";
import Button from "./facilities/button";

const Subcribe = () => {
  return (
    <div
      style={{
        background: "rgba(0, 82, 204, 0.2)",
      }}
      className="col-12 col-lg-6 p-lg-5 p-0  mt-5"
    >
      <div className="float-lg-left p-5 mt-5 ml-5">
        <h6
          className="mb-5"
          style={{
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "12px",
            color: "#5B6B88",
          }}
        >
          SHORT HEADLINE
        </h6>
        <h2
          className="mb-5 pt-4"
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "60px",
            color: "#5B6B88",
          }}
        >
          Subcribe our <br /> newsletter
        </h2>
        <p
          className="mb-5 pt-1"
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "20px",
            color: "#5B6B88",
          }}
        >
          Online businesses utilize newsletters to <br /> keep their brand
          top-of-mind for <br /> consumers, establishing authority.
        </p>
        <Button
          width="230px"
          height="50px"
          borderRadius="8px"
          background="#0052CC"
          color="white"
          text="Learn More"
        />
      </div>
    </div>
  );
};

export default Subcribe;
