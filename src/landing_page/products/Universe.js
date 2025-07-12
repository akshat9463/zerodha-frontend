import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row text-center mb-4">
        <div className="col">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Platform Logos Grid */}
      <div className="row text-center">
        {[
          { src: "/media/images/smallcaseLogo.png", alt: "Smallcase" },
          { src: "/media/images/streakLogo.png", alt: "Streak" },
          { src: "/media/images/sensibullLogo.svg", alt: "Sensibull" },
          { src: "/media/images/zerodhaFundhouse.png", alt: "Zerodha Fundhouse" },
          { src: "/media/images/goldenpiLogo.png", alt: "GoldenPi" },
          { src: "/media/images/dittoLogo.png", alt: "Ditto" },
        ].map((item, index) => (
          <div key={index} className="col-6 col-md-4 mb-4">
            <img
              src={item.src}
              alt={item.alt}
              className="img-fluid mb-2"
              style={{ maxWidth: "120px" }}
            />
            <p className="text-muted">Thematic investment platform</p>
          </div>
        ))}
      </div>

      {/* Signup Button */}
      <div className="row">
        <div className="col text-center">
          <Link
            className="btn btn-primary px-4 py-2 mt-3"
            style={{ fontSize: "0.9rem", color:"white"}}
            to='/signup'>
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
