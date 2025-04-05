import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "./AnimatedLetters";
import AnimatedLogo from "./AnimatedLogo";
import "./styles/Homepage.scss";

const Homepage = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["y", "l", "a", "n", " ", "H", "o", "l", "c", "o", "m", "b"];
    const jobArray = ["a", " ", "w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }
        , []);

    return (
        <div className="container-fluid homepage">
            <span className="html-tags">&lt;html&gt;</span>
            <br />
            <span className="body-tags">&lt;body&gt;</span>
            <div className="textarea">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _15`}>m</span> <img src="/d-high-resolution-logo-transparent.png" alt="" height={"50px"} width={"35px"} />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={16} />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={28} />

                </h1>
                <h2>Full Stack / JavaScript / React / Python / Flask</h2>
                <Link className="btn btn-lg contact" to="/contact">Get In Touch!</Link>
            </div>
            <AnimatedLogo />
            <span className="body-tags">&lt;/body&gt;</span>
            <br />
            <span className="html-tags">&lt;/html&gt;</span>
        </div>
    );
};

export default Homepage;
