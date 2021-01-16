import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ReportOverview from "../reportOverview/reportOverview";

class CellPortReport extends Component {
  state = {
    name: "CellPort Software",
    client: "CellPort Software",
    role: "UX Designer / UI Developer",
    duration: "May 2020 - Present",
    skills: [
      "UX Design",
      "Angular",
      "Typescript",
      "User Acceptance Testing",
      "Requirements Gathering",
      "Digital Prototyping",
    ],
    themeColor: "#F18230",
  };
  render() {
    return (
      <div className="report">
        <Header></Header>
        <ReportOverview key="1" overview={this.state} />
        <div className="jumbotron under-construction">
          <h1>UNDER CONSTRUCTION</h1>
          <p>Come back soon to view this project!</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CellPortReport;
