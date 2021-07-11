import React from "react";
import Logo from "../images/Logo";
const Footer = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-lg-3  p-3">
          <div className="row">
            <div className="col-3">
              <Logo />
            </div>
            <div
              style={{
                fontFamily: "Roboto",
                fontSize: "18",
                fontWeight: "900",
              }}
              className="col-9 gray mb-5"
            >
              NALA
            </div>
          </div>
          <p
            className="my-2 py-2"
            style={{
              fontFamily: "Roboto",
              fontSize: "18",
              fontWeight: "400",
              color: "#5B6B88",
            }}
          >
            2464 Royal Ln undefined Mesa, New Jersey 45463 United States.
          </p>
          <a
            className="mb-2 py-2 gray d-block"
            name="call"
            href="tel:+2085550112"
          >
            (208) 555-0112
          </a>
          <a
            className="gray d-block"
            name="website"
            href="mailto:nevaeh.simmons@example.com"
          >
            nevaeh.simmons@example.com
          </a>
        </div>

        <div className="col-6 col-md-3 offset-lg-1  col-lg-2 p-3">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "18px",
            }}
            className="mb-2 py-1 gray"
          >
            Legals
          </p>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Home
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            About Us
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Contact Us
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Licence
          </a>
        </div>

        <div className="col-6 col-md-3 col-lg-2 p-3">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "18px",
            }}
            className="mb-2 py-1 gray"
          >
            Products
          </p>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Design Kit
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Components
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Elements
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Illustrations
          </a>
        </div>

        <div className="col-6 col-md-3 col-lg-2 p-3">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "18px",
            }}
            className="mb-2 py-1 gray"
          >
            Site Map
          </p>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Icons
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Photos
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Templates
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Fonts
          </a>
        </div>

        <div className="col-6 col-md-3 col-lg-2 p-3">
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "18px",
            }}
            className="mb-2 py-1 gray"
          >
            Secial Media
          </p>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Facebook
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Twitter
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            Instagram
          </a>
          <a
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "18px",
            }}
            href="/#"
            className="mb-2 py-1 gray d-block"
          >
            LinkedIn
          </a>
        </div>
        <div className="col-12 mt-4">
          <hr
            style={{
              color: "#EAF1FD",
              height: "2px",
              textAlign: "center",
              marginLeft: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
