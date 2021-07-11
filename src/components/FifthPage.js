import React from "react";
import Carousel from "./Carousel";

const FifthPage = () => {
  return (
    <div className="py-5 my-5 container-fluid justify-content-center text-center">
      <h6
        className="mt-5"
        style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "12px",
          color: "#5B6B88",
        }}
      >
        TEAM
      </h6>
      <h3
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "48px",
          color: "#5B6B88",
        }}
        className=""
      >
        Meet Our Big Family
      </h3>
      <p
        className=""
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "18",
          color: "#5B6B88",
        }}
      >
        Ullamco id est eu ad culpa laborum. In sit est velit et nostrud ad
        officia <br /> officia ex aliqua elit.
      </p>
      <Carousel />
    </div>
  );
};
export default FifthPage;
