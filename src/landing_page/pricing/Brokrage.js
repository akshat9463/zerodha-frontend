import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4" style={{ marginBottom: "3rem", marginTop: "3rem" }}>
        {/* Left Column: Brokerage Calculator */}
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-primary">Brokerage calculator</h3>
          </a>
          <ul className="text-muted mt-3" style={{ lineHeight: "2", fontSize: "1rem" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Column: List of Charges */}
        <div className="col-12 col-md-4 text-md-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-primary">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
