import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid container">
        <div className="row">
          <div className="col-4">
            <Link to="/">
            <img
              className="mt-2"
              src="/media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            </Link>
          </div>
          <div className="col-5"></div>
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse div pushed to right */}
          <div className="col-3 text-center">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to="/products">
                    Products
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to="/pricing">
                    Pricing
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link active" aria-disabled="true" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
