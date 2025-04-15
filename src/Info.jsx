import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import Loader from "react-loaders";
import "./styles/Info.scss";

const Info = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = ["A", "b", "o", "u", "t", " ", "M", "e"];
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Loader type="ball-grid-pulse" />
      <div className="container-fluid info">
        <h1 className="d-flex justify-content-center mt-5">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={15}
          />
        </h1>
        <div className="row d-flex justify-content-center text-center mt-5">
          <p className="col-12 col-md-8 mt-4">
            I've recently completed a full-stack web development bootcamp, where
            I honed my skills in front-end and back-end technologies. I have
            experience working with RESTful APIs, databases, and version control
            systems like Git. I am also familiar with Agile methodologies and
            have worked in collaborative team environments.
          </p>
          <p className="col-12 col-md-8 mt-4">
            I am a passionate web developer with a strong foundation in
            JavaScript, React, and Python. I enjoy creating dynamic and
            responsive web applications that provide a seamless user experience,
            as well as working on complex backend logic intensive solutions. I
            am always eager to learn new technologies and improve my skills.
          </p>
          <p className="col-12 col-md-8 my-4">
            If you are looking for a dedicated and enthusiastic web developer to
            join your team, please feel free to reach out. I would love to
            connect and discuss potential opportunities. You can find my contact
            information in the footer below or within my résumé which can be
            accessed via the navbar.
          </p>
        </div>
        <h6 className="d-flex justify-content-center text-center my-5">
          I appreciate your time and look forward to working with you!
        </h6>
      </div>
    </>
  );
};
export default Info;
