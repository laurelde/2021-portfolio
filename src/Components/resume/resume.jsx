import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ResumeImg from "../../images/resume.jpg";
import ResumeDownload from "../../images/resume.pdf";

class Resume extends Component {
  state = {};
  render() {
    return (
      <>
        <Header></Header>
        <a
          href={ResumeDownload}
          download="LaurelDentingerResume"
          target="none"
          id="resume-download"
        >
          <i class="fas fa-download"></i>
        </a>
        <img id="resume" src={ResumeImg}></img>
        <Footer />
      </>
    );
  }
}

export default Resume;
