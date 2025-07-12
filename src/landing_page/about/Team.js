import React from "react";

function Team() {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row border-top">
        <div className="col-12 text-center mt-4">
          <h1 className="p-3">People</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div
        className="row align-items-center mt-3 text-muted"
        style={{ fontSize: "1rem", lineHeight: "1.6rem" }}
      >
        {/* Left: Image & Name */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/media/images/myPic.png"
            alt="Akshat Kanaujiya"
            className="img-fluid"
            style={{ borderRadius: "50%", maxWidth: "200px" }}
          />
          <h4 className="mt-3">Akshat Kanaujiya</h4>
          <h6>Inspiring Software Engineer</h6>
        </div>

        {/* Right: Bio */}
        <div className="col-12 col-md-6 text-center text-md-start px-3">
          <p>
            My name is Akshat Kanaujiya. I completed my Bachelor's degree from
            Lucknow Christian Degree College with a specialization in Software
            Development. I have a deep interest in web development and have built
            3 full-stack projects using Node.js and React.js.
          </p>
          <p>
            Currently, I'm seeking opportunities to work on real-world projects,
            and I would be grateful for the chance to collaborate. Outside of
            tech, I enjoy learning new things and playing cricket.
          </p>
          <p>Playing cricket is my zen.</p>
          <p>
            Connect with me on:&nbsp;
            <a href="#" className="me-2">Homepage</a> /{" "}
            <a href="#" className="me-2">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
