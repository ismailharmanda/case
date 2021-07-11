import React from "react";

const MiddleImage = () => {
  return (
    <img
      className="mt-sm-5 mt-md-1"
      style={{
        position: "relative",
        left: "50%",
        top: "-280px",
        transform: "translateX(-50%)",
        maxWidth: "100%",
        height: "auto",
      }}
      src="http://via.placeholder.com/1220x560"
      alt="Middle thing"
    ></img>
  );
};

export default MiddleImage;
