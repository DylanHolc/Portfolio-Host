import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import "./styles/Info.scss";

const Info = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [containerClass, setContainerClass] = useState("container-fluid info");
  const titleArray = ["A", "b", "o", "u", "t", " ", "M", "e"];
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setContainerClass("container-fluid xl");
      }
    };
    handleResize();
  }, []);

  return (
    <>
      <div className={containerClass}>
        <h1 className="d-flex justify-content-center mt-5">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={15}
          />
        </h1>
        <div className="row d-flex justify-content-center text-center mt-5">
          <p className="col-12 col-md-8 mt-4">
            Having completed a full-stack web development bootcamp, where I
            honed my skills in front-end and back-end technologies. I have
            experience working with RESTful APIs, databases, and version control
            systems like Git. I am also familiar with Agile methodologies and
            have worked in collaborative team environments.
          </p>
          <p className="col-12 col-md-8 mt-4">
            I have a strong foundation in JavaScript, React, Next.js, Astro.js,
            and Python as well as brief experience using C# and .NET/MVC. I
            enjoy creating dynamic web applications that provide a seamless user
            experience, as well as working on complex backend logic intensive
            solutions. I am always eager to learn new technologies and improve
            my skills.
          </p>
          <p className="col-12 col-md-8 my-4">
            If you are looking for a web developer to join your team, please
            feel free to reach out. I would love to connect and discuss
            potential opportunities. You can find my contact information in the
            footer below or within my résumé which can be accessed via the
            navbar.
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
