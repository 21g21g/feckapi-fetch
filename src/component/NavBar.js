import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            geba collection
          </a>

          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              {" "}
              Home{" "}
            </Link>

            <Link className="nav-link" to="/product">
              Product
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
