import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: "",
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-4 p-4 search-container">
              <h1 className="display-4 text-center">Search For a song...</h1>
              <p className="lead text-center">Get the lyrics for any song</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
