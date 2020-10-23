import React, { Component } from "react";
import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <nav className="about">
        <Link to="/about" component={AboutPage}>
          <h1 className="about-text">About</h1>
        </Link>
      </nav>
    );
  }
}

export default About;
