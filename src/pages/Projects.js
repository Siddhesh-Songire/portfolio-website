import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";

import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1
        style={{
          color: "#3e497a",
          borderBottom: "4px solid #ff0099",
          marginBottom: "5px",
        }}
      >
        {" "}
        My Personal Projects{" "}
      </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
