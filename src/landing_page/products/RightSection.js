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
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          &nbsp;&nbsp;&nbsp;
          <a href="" style={{ textDecoration: "none" }}>
            learnMore &nbsp;&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br />
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
