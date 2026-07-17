import React, { useState, useEffect } from "react";
import "./styles/Projects.scss";

const ProjectCard = ({ image, imageAlt, title, description, href }) => (
  <div className="card bg-dark text-light m-3 col-12 col-md-9 border-0">
    {image && (
      <img src={image} className="card-img-top" alt={imageAlt ?? title} />
    )}
    <div className="card-body m-2">
      <h5 className="card-title m-2">{title}</h5>
      <p className="card-text p-2">{description}</p>
      <a href={href} className="btn btn-lg proj-btn">
        Check it out!
      </a>
    </div>
  </div>
);

const professionalProjects = [
  {
    image: "/Screenshot 2026-07-17 161814.png",
    title: "Research Only Club",
    description:
      "A Next.js application for a peptide startup that includes Better Auth user authentication, a Drizzle PostgreSQL database, backend API, ecommerce functionality, a fully customized UI, and automated email services to better communicate with customers.",
    href: "https://researchonlyclub.com",
  },
];

const schoolProjects = [
  {
    image: "/Screenshot 2025-03-09 213606.png",
    title: "TCG Clone",
    description:
      "A web development project meant to emulate popular trading card hobby/auction websites utilizing Vite, React, Javascript, PostgreSQL, Sequelize, Express, Bcrypt, HTML, Bootstrap, and CSS.",
    href: "https://www.capstone2frontend.xyz",
  },
  {
    image: "/Screenshot 2025-03-09 213647.png",
    title: "Alcoholics Asynchronous",
    description:
      "A web application that emulates popular recipe sharing websites utilizing Python, Flask-SQLAlchemy, Bcrypt, WTForms, PostgreSQL, Javascript, HTML, Jinja, Bootstrap, and CSS.",
    href: "https://capstone1-34f1.onrender.com",
  },
];

const Projects = () => {
  const [containerClass, setContainerClass] = useState(
    "container-fluid projects text-center"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setContainerClass("container-fluid mobile text-center");
      } else {
        setContainerClass("container-fluid projects text-center");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={containerClass}>
      <h1 className="my-4">Projects</h1>

      <h2 className="section-heading my-4">Professional Projects</h2>
      <div className="d-flex justify-content-center row">
        {professionalProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="section-heading my-5">School Projects</h2>
      <div className="d-flex justify-content-center text-center">
        <h4 className="col-12 col-md-10 my-4">
          *** These applications utilize a free version of Render to host the
          backend API/Database. As a result the first request made while
          interacting with the application may take up to 2 minutes to receive a
          response ***
        </h4>
      </div>
      <div className="d-flex justify-content-center row">
        {schoolProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
