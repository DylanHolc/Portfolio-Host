import React from "react";

const Résumé = () => {
  return (
    <div className="container-fluid row">
      <div className="col-12 d-flex justify-content-center mt-5 mb-3">
        <img src="/Resume.jpg" alt="" className="my-5 img-fluid" />
      </div>
      <div className="d-flex justify-content-center mb-5 ">
        <a
          href="/Resume.pdf"
          download={"Resume.pdf"}
          className="btn btn-lg proj-btn fw-bold"
        >
          Download
        </a>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5 mb-3">
        <img src="/Certificate.jpg" alt="" className="my-5 img-fluid" />
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
