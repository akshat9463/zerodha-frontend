import React from "react";

function Team() {
  return (
    <div className="container p-4">
      <div className="row text-center border-top">
        <h1 className=" p-3 mt-3">People</h1>
      </div>
      <div
        className="row mt-4 p-2 text-muted"
        style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
      >
        <div className="col-6 text-center">
          <img
            src="media/images/myPic.png"
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 mt-3" style={{lineHeight:"2rem"}}>
          <p>
            My name is Akshat Kanaujiya. I have done my bacholor's degree 
            from Lucknow Christian Degree College and my specialization is in 
            Software Development. My deep interest is in web Development and 
            I have made 3 full stack web dev projects by using Node.js and React.js.
          </p>
          <p>
            Now I am continuing searching for opportunities so that I can work on 
            real world projects and I will be very greatful for working with you. 
            A part from that my hobbies are learning new things and Playing cricket.
          </p>
          <p>Playing cricket is my zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
