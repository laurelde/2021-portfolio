import React, { Component } from "react";
import "./projects.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Project from "../project/project";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import classifyImg1 from "../../images/classify_preview/classify_1.png";
import classifyImg2 from "../../images/classify_preview/classify_2.png";
import classifyImg3 from "../../images/classify_preview/classify_3.png";
import classifyImg4 from "../../images/classify_preview/classify_4.png";
import classifyImg5 from "../../images/classify_preview/classify_5.png";
import cellportImg1 from "../../images/cellport_preview/cellport_1.png";
import cellportImg2 from "../../images/cellport_preview/cellport_2.png";
import cellportImg3 from "../../images/cellport_preview/cellport_3.png";
import cellportImg4 from "../../images/cellport_preview/cellport_4.png";
import cellportImg5 from "../../images/cellport_preview/cellport_5.png";
import hagertyImg1 from "../../images/hagerty_preview/hagerty_1.svg";
import hagertyImg2 from "../../images/hagerty_preview/hagerty_2.svg";
import hagertyImg5 from "../../images/hagerty_preview/hagerty_3.svg";
import hagertyImg4 from "../../images/hagerty_preview/hagerty_4.svg";
import hagertyImg3 from "../../images/hagerty_preview/hagerty_5.svg";

class Projects extends Component {
  state = {
    projects: [
      {
        id: "classify-app",
        name: "Classify App",
        description:
          "Mobile app connecting students with local classes, providing exposure to new fields without the commitment of semester-long courses.",
        type: "mobile-app",
        tags: [
          "UI/UX Design",
          "Storyboarding",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
        ],
        image1: classifyImg1,
        image2: classifyImg2,
        image3: classifyImg3,
        image4: classifyImg4,
        image5: classifyImg5,
        themeColor: "#9765a3",
      },
      {
        id: "cellport",
        name: "CellPort Software",
        description:
          "Connecting an overlooked user group to a company's developing business structure and culture.",
        type: "website",
        tags: [
          "UX Design",
          "Persona Creation",
          "Wireframing",
          "Prototyping",
          "Business Analysis",
        ],
        image1: cellportImg1,
        image2: cellportImg2,
        image3: cellportImg3,
        image4: cellportImg4,
        image5: cellportImg5,
        themeColor: "#F18230",
      },
      {
        id: "hdc-app",
        name: "Hagerty HDC App",
        description:
          "Connecting an overlooked user group to a company's developing business structure and culture.",
        type: "mobile-app",
        tags: [
          "UX Design",
          "Persona Creation",
          "Wireframing",
          "Prototyping",
          "Business Analysis",
        ],
        image1: hagertyImg1,
        image2: hagertyImg2,
        image3: hagertyImg3,
        image4: hagertyImg4,
        image5: hagertyImg5,
        themeColor: "#238ded",
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <>
        <Header />
        <Carousel interval={99999}>
          {projects.map((project) => (
            <Carousel.Item className="carousel-item">
              <Project
                className="project-slide d-block"
                key={project.id}
                project={project}
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
