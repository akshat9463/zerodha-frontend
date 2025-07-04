import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a href="" className="mt-5">Track Tickets</a>
      </div>

      <div className="row p-2 ">
        <div className="col-6 p-5" style={{lineHeight:"3.4rem"}}>
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do I activate F&O or what to do if my order is not placed..." />
          <br />
          <a href="">Track account opening</a>&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;
        </div>
        <div className="col-6 p-5"  style={{lineHeight:"3.4rem"}}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
