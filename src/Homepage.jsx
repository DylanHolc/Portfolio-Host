import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "./AnimatedLetters";
import AnimatedLogo from "./AnimatedLogo";
import Loader from "react-loaders";
import "./styles/Homepage.scss";

const Homepage = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const greetingArray = ["G", "r", "e", "e", "t", "i", "n", "g", "s", ",", " ", "I", "'", "m"];
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
        <>
            <div className="container-fluid homepage">
                <span className="html-tags">&lt;html&gt;</span>
                <br />
                <span className="body-tags">&lt;body&gt;</span>
                <div className="textarea">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={greetingArray}
                            idx={11} />
                        <br />
                        <span className={`${letterClass} _25`}></span> <img src="/d-high-resolution-logo-transparent.png" alt="" height={"50px"} width={"35px"} />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={26} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={38} />

                    </h1>
                    <h2>Full Stack / JavaScript / React / Python / Flask</h2>
                    <Link className="btn btn-lg contact" to="/contact">Get In Touch!</Link>
                </div>
                <AnimatedLogo />
                <span className="body-tags">&lt;/body&gt;</span>
                <br />
                <span className="html-tags">&lt;/html&gt;</span>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Homepage;
