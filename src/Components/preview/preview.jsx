import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./preview.css";
import { projects } from "../../Data/projects.js";

class Preview extends Component {
  render() {
    const { id } = this.props;
    return (
      <>
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <div className="preview">
              <div id="image-preview" className={project.type}>
                <img id="img1" src={project.image1}></img>
                <img id="img2" src={project.image2}></img>
                <img id="img3" src={project.image3}></img>
                <img id="img4" src={project.image4}></img>
                <img id="img5" src={project.image5}></img>
              </div>
              <h2>{project.description}</h2>
              <Link to={`/projects/${project.id}`} className="view-link">
                <button style={{ backgroundColor: project.themeColor }}>
                  View Project
                </button>
              </Link>
            </div>
          ))}
      </>
    );
  }
}

export default Preview;
