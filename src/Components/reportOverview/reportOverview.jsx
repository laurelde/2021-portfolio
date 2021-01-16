import React, { Component } from "react";

class ReportOverview extends Component {
  state = {};
  render() {
    const {
      name,
      client,
      role,
      duration,
      skills,
      themeColor,
    } = this.props.overview;
    const skillNames = skills.map((skill) => <li key={skill}>{skill}</li>);
    return (
      <div className="report-overview">
        <h1 className="project-name">{name}</h1>
        <div className="specs" style={{ backgroundColor: themeColor }}>
          <div className="row">
            <div>
              <h2>
                <i className="fa fa-briefcase mr-1" aria-hidden="true"></i>
                <strong> Client</strong>
              </h2>
              <h2>{client}</h2>
            </div>
            <div>
              <h2>
                <i className="fa fa-users mr-1" aria-hidden="true"></i>
                <strong> Role</strong>
              </h2>
              <h2>{role}</h2>
            </div>
            <div>
              <h2>
                <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                <strong> Duration</strong>
              </h2>
              <h2>{duration}</h2>
            </div>
          </div>
          <div className="row">
            <h2>
              <i className="fa fa-wrench mr-2" aria-hidden="true"></i>
              <strong>Skills & Tools</strong>
              <ul>{skillNames}</ul>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportOverview;
