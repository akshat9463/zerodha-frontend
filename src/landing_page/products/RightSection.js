import React from "react";

function RightSection({
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
        {/* Left: Text Content */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 px-4">
          <h2 className="mb-3">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="mb-4">
            {tryDemo && (
              <a href="#" className="me-4" style={{ textDecoration: "none" }}>
                {tryDemo} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a href="#" style={{ textDecoration: "none" }}>
                {learnMore} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {/* Optional Store Badges */}
          {googlePlay && appStore && (
            <div className="mt-3">
              <a href={googlePlay}>
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
              <a href={appStore} className="ms-3">
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            </div>
          )}
        </div>

        {/* Right: Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
