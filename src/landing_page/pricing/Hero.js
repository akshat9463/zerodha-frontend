import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row text-center py-4 border-bottom" style={{ marginBottom: "3rem", marginTop: "2rem" }}>
        <div className="col-12">
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center g-4">
        <div className="col-12 col-md-4">
          <img src="/media/images/pricing0.svg" alt="Free equity delivery" className="img-fluid mb-3" />
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img src="/media/images/intradayTrades.svg" alt="Intraday and F&O" className="img-fluid mb-3" />
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img src="/media/images/pricing0.svg" alt="Free direct MF" className="img-fluid mb-3" />
          <h2 className="fs-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
