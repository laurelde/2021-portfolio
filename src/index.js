import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import Projects from "./Components/projects/projects";
import About from "./Components/about/about";
import Landing from "./Components/landing/landing";
import Resume from "./Components/resume/resume";
import CellPortReport from "./Components/reports/cellportReport";
import ClassifyReport from "./Components/reports/classifyReport";
import HDCReport from "./Components/reports/hdcReport";

const routing = (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="#" component={Landing} />
    <Route exact path="/projects" component={Projects} />
    <Route path="/projects/classify-app" component={ClassifyReport} />
    <Route path="/projects/hdc-app" component={HDCReport} />
    <Route path="/projects/cellport" component={CellPortReport} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
