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
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href="" style={{ textDecoration: "none" }}>
            tryDemo &nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="" style={{ textDecoration: "none" }}>
            learnMore &nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br/>
          <div className="mt-5">
          <a href={googlePlay}>
            <img src="\media\images\googlePlayBadge.svg"></img>
          </a>
          <a href={appStore} style={{marginLeft:'1rem'}}>
            <img src="\media\images\appstoreBadge.svg"></img>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
