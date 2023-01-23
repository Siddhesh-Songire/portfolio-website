import React from 'react';
import ProjectItem from '../components/ProjectItem';
import "../styles/Project.css";
import img1 from "../assets/img1.png";

import { ProjectList } from "../helpers/ProjectList"

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className="projectList">
        
        {ProjectList.map((project, idx) => {
          return <ProjectItem id = {idx} name = {project.name} image = {project.image} />
        })}
        
      </div>
    </div>
  );
}

export default Projects;