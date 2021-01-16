import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./preview.css";

class Preview extends Component {
  render() {
    console.log("Preview RENDERED");
    console.log(this.props);
    return (
      <div className="preview">
        <div id="image-preview" className={this.props.project.type}>
          <img id="img1" src={this.props.project.image1}></img>
          <img id="img2" src={this.props.project.image2}></img>
          <img id="img3" src={this.props.project.image3}></img>
          <img id="img4" src={this.props.project.image4}></img>
          <img id="img5" src={this.props.project.image5}></img>
        </div>
        <h2>{this.props.project.description}</h2>
        <Link to={`/projects/${this.props.id}`} className="view-link">
          <button style={{ backgroundColor: this.props.project.themeColor }}>
            View Project
          </button>
        </Link>
      </div>
    );
  }
}

export default Preview;
