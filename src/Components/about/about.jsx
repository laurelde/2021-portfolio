import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <Header></Header>
        <div className="jumbotron under-construction">
          <h1>UNDER CONSTRUCTION</h1>
          <p>Come back soon to view this project!</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
