import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-info text-dark supportHero">
      <div className="container py-4">
        {/* Support Header */}
        <div className="text-center mb-4" id="supportWrapper">
          <h4 className="mt-4">Support Portal</h4>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Left Side: Search & Links */}
          <div className="col-12 col-md-6 p-4" style={{ lineHeight: "2.2rem" }}>
            <h2 className="fs-5 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ex:  How do I activate F&O or what to do if my order is not placed..."
            />
            <div className="d-flex flex-wrap gap-3 mt-2">
              <a href="#" className="text-white text-decoration-underline">Track account opening</a>
              <a href="#" className="text-white text-decoration-underline">Track segment activation</a>
              <a href="#" className="text-white text-decoration-underline">Intraday margins</a>
              <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
            </div>
          </div>

          {/* Right Side: Featured */}
          <div className="col-12 col-md-6 p-4" style={{ lineHeight: "2rem" }}>
            <h2 className="fs-5 mb-3">Featured</h2>
            <ol className="ps-3">
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
