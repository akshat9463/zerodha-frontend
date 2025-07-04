import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row mt-3">
        <div className="col-6 mt-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 text-center">
          <img src="\media\images\ecosystem.png" style={{ width: "80%"}}></img>
          <div>
          <a href="" style={{textDecoration:"none"}} className="mx-2">Explore our products&nbsp;&nbsp;
          <i class="fa fa-long-arrow-right"></i></a>
          <a href="" style={{textDecoration:"none"}} className="mx-2">Try kite&nbsp;&nbsp;
          <i class="fa fa-long-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
