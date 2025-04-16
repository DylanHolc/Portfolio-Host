import React, { useEffect, useRef, useState } from "react";
import "./styles/AnimatedLogo.scss";

const AnimatedLogo = () => {
  const [logoClass, setLogoClass] = useState("fadedLogo");

  const solidLogoRef = useRef();
  const fadedLogoRef = useRef();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoClass("invis");
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="position-absolute mt-5 z-n1">
      <img
        src="/d-high-resolution-logo-transparent.png"
        ref={solidLogoRef}
        alt="Logo"
        className="solidLogo position-absolute"
        height={"600px"}
        width={"450px"}
      />
      <img
        src="/d-high-resolution-logo-grayscale-transparent.png"
        ref={fadedLogoRef}
        alt="Logo"
        className={logoClass}
        height={"600px"}
        width={"450px"}
      />
    </div>
  );
};

export default AnimatedLogo;
