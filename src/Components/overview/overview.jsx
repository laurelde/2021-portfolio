import React, { Component } from "react";
import "./overview.css";
import { projects } from "../../Data/projects.js";

class Overview extends Component {
  render() {
    const { name, tags, description } = this.props;
    //const tagNames = tags.map((tag) => <li key={tag}>{tag}</li>);
    return (
      <div className="overview">
        <h1> {name} </h1>
        <h2> {description} </h2>
      </div>
    );
  }
}

export default Overview;
