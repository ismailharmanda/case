import React from "react";
import JoinUs from "./JoinUs";

const ForthPage = () => {
  return (
    <div
      style={{
        background: "#F5F5F5",
      }}
      className="container-fluid"
    >
      <div className="container">
        <div className="row">
          <JoinUs />
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ForthPage;
