import React from "react";
import { Link } from "react-router-dom";

function OpenAccounts() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mb-3">Open a Zerodha Account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <Link className="btn btn-primary px-4 py-2" to='/signup'>
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccounts;
