import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="nav-text">
          <Link to="/">Lyrics Finder 🎵</Link>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
