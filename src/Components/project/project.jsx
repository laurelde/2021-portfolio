import React, { Component } from "react";
import Overview from "../overview/overview";
import Preview from "../preview/preview";
import "./project.css";
import { projects } from "../../Data/projects.js";

class Project extends Component {
  render() {
    const { id } = this.props;
    return (
      <>
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <div className="project">
              <Overview
                key={project.name}
                name={project.name}
                description={project.description}
                tags={project.tags}
                themeColor={project.themeColor}
              ></Overview>
              <Preview
                key={project.id}
                id={project.id}
                project={project}
              ></Preview>
            </div>
          ))}
        ;
      </>
    );
  }
}

export default Project;
