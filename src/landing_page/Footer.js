import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row mb-5">
          {/* Logo and copyright */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="/media/images/logo.svg"
              className="img-fluid"
              alt="Logo"
              style={{ width: "60%" }}
            />
            <p className="mt-4 small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled" style={{ lineHeight: "1.8rem" }}>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled" style={{ lineHeight: "1.8rem" }}>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">Z-Connect blog</a></li>
              <li><a href="#">List of charges</a></li>
              <li><a href="#">Downloads & resources</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <p className="fw-bold">Account</p>
            <ul className="list-unstyled" style={{ lineHeight: "1.8rem" }}>
              <li><a href="#">Open an account</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Text */}
        <div className="text-muted small" style={{ fontSize: "14px", lineHeight: "1.6rem" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
            Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail.
            Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions. Update your mobile/email. Receive
            transaction info directly from Exchange at day end. KYC is one-time
            for all intermediaries (broker, DP, Mutual Fund etc.).
          </p>

          <p>
            IPO alert: No need for cheque. Use bank account and sign the IPO form
            to authorize payment. We do not provide stock tips or trade on your
            behalf. If anyone claims so, report immediately.
          </p>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-4 d-flex flex-wrap justify-content-center gap-3 text-muted small">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Policy</a>
          <a href="#">Closure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
