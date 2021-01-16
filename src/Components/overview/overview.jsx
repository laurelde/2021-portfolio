import React, { Component } from "react";
import "./overview.css";

class Overview extends Component {
  render() {
    const { name, description, tags, themeColor } = this.props;
    const tagNames = tags.map((tag) => <li key={tag}>{tag}</li>);
    return (
      <div className="overview">
        <h1> {name} </h1>
        <ul>{tagNames}</ul>
        <h2> {description} </h2>
      </div>
    );
  }
}

export default Overview;
