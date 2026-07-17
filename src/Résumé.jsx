import React from "react";
import "./styles/Resume.scss";

const Résumé = () => {
  return (
    <div className="container-fluid row resume-page">
      <div className="col-12 d-flex justify-content-center mt-5 mb-3">
        <img
          src="/Resume.png"
          alt="Resume"
          className="my-5 img-fluid resume-image"
        />
      </div>
      <div className="d-flex justify-content-center mb-5 ">
        <a
          href="/Resume.pdf"
          download={"DylanHolcombResume.pdf"}
          className="btn btn-lg proj-btn fw-bold"
        >
          Download
        </a>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5 mb-3">
        <img
          src="/Certificate.jpg"
          alt="Certificate"
          className="my-5 img-fluid resume-image"
        />
      </div>
      <div className="d-flex justify-content-center mb-5 ">
        <a
          href="/Springboard-Certificate.pdf"
          download={"Certificate.pdf"}
          className="btn btn-lg proj-btn fw-bold"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Résumé;
