import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-3">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mt-2">Futures and Options</li>
                <li className="mt-2">Commodity derivatives</li>
                <li className="mt-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mt-2">Stocks & IPOs</li>
                <li className="mt-2">Direct mutual funds</li>
                <li className="mt-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press logos image */}
          <img
            src="/media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
