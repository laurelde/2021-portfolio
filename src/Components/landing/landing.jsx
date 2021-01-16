import React, { Component } from "react";
import "./landing.css";
import { Redirect } from "react-router-dom";
import Footer from "../footer/footer";
import Typewriter from "typewriter-effect";

class Landing extends Component {
  state = {
    name: "LAUREL DENTINGER",
    displayedName: "",
  };

  constructor() {
    super();
  }

  enterAnimation() {
    let banner = document.getElementById("banner");
    let cover = document.getElementById("cover");
    let cover2 = document.getElementById("cover2");
    banner.classList.add("enterSiteClass");
    cover.classList.add("coverTop");
    cover2.classList.add("coverTop");
    setTimeout(function () {
      window.location = window.location + "projects";
    }, 2250);
  }

  render() {
    return (
      <div id="landing">
        <div id="banner">
          <div id="cover"></div>
          <h1>LAUREL DENTINGER</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["DEVELOPER", "DESIGNER", "DATA ANALYST", "TEACHER"],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </h2>
          <button onClick={this.enterAnimation}>Enter Site</button>
        </div>
        <div id="cover2"></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Landing;
