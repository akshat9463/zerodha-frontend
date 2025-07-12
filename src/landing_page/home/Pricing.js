import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing&nbsp;&nbsp;
            <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Right Pricing Cards */}
        <div className="col-12 col-md-8">
          <div className="row text-center">
            <div className="col-12 col-sm-6 mb-4 mb-sm-0">
              <div className="border p-4 h-100">
                <h1>₹0</h1>
                <p>
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
