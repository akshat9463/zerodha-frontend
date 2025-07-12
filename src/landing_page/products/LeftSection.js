import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right Content Section */}
        <div className="col-12 col-md-6 px-4">
          <h2 className="mb-3">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          {/* Links */}
          <div className="mb-4">
            <a href="#" style={{ textDecoration: "none" }} className="me-4">
              {tryDemo} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              {learnMore} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Download Badges */}
          <div>
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore} className="ms-3">
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Apple App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
