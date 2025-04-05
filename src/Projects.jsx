import React, { useState, useEffect } from "react";


const Projects = () => {

    return (
        <div className="container-fluid text-center">
            <h1 className="my-4 ">Projects</h1>
            <div className="d-flex justify-content-center row">
                <div className="card bg-dark text-light m-3 col-9 border-0">
                    <img src="/Screenshot 2025-03-09 213606.png" className="card-img-top" alt="..." />
                    <div className="card-body m-2">
                        <h5 className="card-title m-2">TCG Clone</h5>
                        <p className="card-text p-2"> A web development project meant to emulate popular trading card hobby/auction websites utilizing Vite, React, Javascript, PostgreSQL, Sequelize, Express, Bcrypt, HTML, Bootstrap, and CSS.</p>
                        <a href="https://www.capstone2frontend.xyz" className="btn btn-lg proj-btn">Check it out!</a>
                    </div>
                </div>
                <div className="card bg-dark text-light m-3 col-9 border-0">
                    <img src="/Screenshot 2025-03-09 213647.png" className="card-img-top" alt="..." />
                    <div className="card-body m-2">
                        <h5 className="card-title m-2">Alcoholics Asynchronous</h5>
                        <p className="card-text p-2">A web application that emulates popular recipe sharing websites utilizing Python, Flask-SQLAlchemy, Bcrypt, WTForms, PostgreSQL, Javascript, HTML, Jinja, Bootstrap, and CSS</p>
                        <a href="https://capstone1-34f1.onrender.com" className="btn btn-lg proj-btn">Check it out!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;