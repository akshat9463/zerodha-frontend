import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="/media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <ul>
            <div className="row mt-2">
                <div className="col-6 mt-3">
                    <li className="mt-2">Futurs and Options</li>
                    <li className="mt-2">Commodity derivatives</li>
                    <li className="mt-2">Currency derivatives</li>
                </div>
                <div className="col-6 mt-3">
                    <li className="mt-2">Stocks & IPOs</li>
                    <li className="mt-2">Direct mutual funds</li>
                    <li className="mt-2">Bonds and Govt. Securities</li>
                </div>                
            </div>
          </ul>
          <img src="\media\images\pressLogos.png" className="mt-5" style={{width:"95%"}}></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
