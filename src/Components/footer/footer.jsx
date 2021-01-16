import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <nav className="navbar navbar-light navbar-expand navbar-bottom">
          <ul className="nav navbar-nav navbar-center">
            <li className="nav-item">
              <a href="https://github.com/laurelde" target="_blank">
                <i className="fab fa-github" aria-hidden="true">
                  {" "}
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/laurel-dentinger-256b6913b/"
                target="_blank"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="mailto: laurelde@umich.edu" target="_blank">
                <i className="far fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com/laurel.dentinger"
                target="_blank"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          <h5>©2020 Laurel Dentinger</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
