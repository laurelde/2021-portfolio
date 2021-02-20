import React, { Component } from "react";
import "./projects.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Project from "../project/project";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { projects } from "../../Data/projects.js";

class Projects extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel interval={99999}>
          {projects.map((project) => (
            <Carousel.Item className="carousel-item">
              <Project
                className="project-slide d-block"
                key={project.id}
                id={project.id}
              ></Project>
            </Carousel.Item>
          ))}
        </Carousel>
        <Footer></Footer>
      </>
    );
  }
}

export default Projects;
