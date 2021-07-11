import React from "react";
import Logo from "../images/Logo";
import Facebook from "../images/Facebook";
import Twitter from "../images/Twitter";
import Instagram from "../images/Instagram";
import "../styles/Navbar.css";
const NavBar = () => {
  return (
    <div className="roboto">
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid p-0 m-0 d-flex justify-content-between align-items-center">
          <div className="pt-2">
            <a className="navbar-brand" href="/#">
              <Logo />
            </a>
          </div>
          <div className="pt-3">
            <ul className="">
              <li className="nav-item d-inline mx-2 ">
                <a className="grayColor" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item d-inline mx-2">
                <a className="grayColor" href="/#">
                  Services
                </a>
              </li>
              <li className="nav-item d-inline mx-2">
                <a className="grayColor" href="/#">
                  Downloads
                </a>
              </li>
              <li className="nav-item d-inline mx-2">
                <a className="grayColor" href="/#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-0">
            <a
              href="/#"
              style={{
                textDecoration: "none",
              }}
            >
              <Facebook />
            </a>
            <a
              href="/#"
              style={{
                textDecoration: "none",
              }}
            >
              <Twitter />
            </a>
            <a
              href="/#"
              style={{
                textDecoration: "none",
              }}
            >
              <Instagram />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
