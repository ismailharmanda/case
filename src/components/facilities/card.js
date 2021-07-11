import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ background: "#EAF1FD", maxWidth: "628px" }}>
      <div className="row g-0">
        <div className="col-lg-4">
          <img
            src={props.link}
            className="img-fluid rounded-start"
            alt="card"
          />
        </div>
        <div className="col-lg-8">
          <div className="card-body text-left">
            <h4
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: "34px",
                color: "#5B6B88",
              }}
              className="card-title"
            >
              {props.title}
            </h4>
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "20px",
                color: "#5B6B88",
              }}
              className="card-text"
            >
              {props.text}
            </p>
            <p className="card-text">
              <small className="text-muted">
                <a
                  href="/#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <i className="fab fa-facebook fa-2x m-2"></i>
                </a>

                <a
                  href="/#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <i className="fab fa-twitter fa-2x m-2"></i>
                </a>
                <a
                  href="/#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <i className="fab fa-instagram fa-2x m-2"></i>
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
