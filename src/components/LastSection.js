import React from "react";

const LastSection = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <a
            href="/#"
            style={{
              textDecoration: "none",
            }}
          >
            <i className="fab fa-facebook fa-2x m-2 last-section-icon"></i>
          </a>
          <a
            href="/#"
            style={{
              textDecoration: "none",
            }}
          >
            <i className="fab fa-twitter fa-2x m-2 last-section-icon"></i>
          </a>
          <a
            href="/#"
            style={{
              textDecoration: "none",
            }}
          >
            <i className="fab fa-instagram fa-2x m-2 last-section-icon"></i>
          </a>
        </div>
        <div
          className="gray"
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          Copyright @ 2020 Themesmile
        </div>
        <div>
          <a
            href="/#"
            style={{
              textDecoration: "none",
              color: "#5B6B88",
            }}
          >
            Legals
          </a>
          <span className="gray"> | </span>
          <a
            href="/#"
            style={{
              textDecoration: "none",
              color: "#5B6B88",
            }}
          >
            Term & Conditions
          </a>
          <span className="gray"> | </span>
          <a
            href="/#"
            style={{
              textDecoration: "none",
              color: "#5B6B88",
            }}
          >
            License
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
