import React from "react";

function OpenAccounts() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-2">Open a Zerodha Account</h1>
        <p>
          {" "}
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-.8 p-2 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccounts;
