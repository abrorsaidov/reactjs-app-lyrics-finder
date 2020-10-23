import React, { Component } from "react";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";

export class About extends Component {
  render() {
    return (
      <nav className="about">
        <Link to="/about" className="about-text">
          About
        </Link>
      </nav>
    );
  }
}

export default About;
