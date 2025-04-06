import React from "react";

const Résumé = () => {
    return (
        <div className="container-fluid row">
            <div className="col-12 d-flex justify-content-center mt-5 mb-3">
                <img src="/1743976249595-a41aa25f-677a-4921-b4ae-4c936224db23_1.jpg" alt="" className="my-5 img-fluid" />
            </div>
            <div className="d-flex justify-content-center mb-5 ">
                <a href="/Dylan_H_SWE__Copy_.pdf" download={"Resume.pdf"} className="btn btn-lg proj-btn fw-bold">Download</a>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5 mb-3">
                <img src="/1741227567990-1fabe0d4-6cd4-45d4-8c4d-ee8c3808e21c_1.jpg" alt="" className="my-5 img-fluid" />
            </div>
            <div className="d-flex justify-content-center mb-5 ">
                <a href="/Springboard-Certificate.pdf" download={"Certificate.pdf"} className="btn btn-lg proj-btn fw-bold">Download</a>
            </div>
        </div>
    );
}

export default Résumé;