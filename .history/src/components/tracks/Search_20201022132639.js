import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: "",
  };

  onChange(e) {
    this.setState({ trackTitle: e.target.value });
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-4 p-4 search-container">
              <h1 className="display-4 text-center search-heading">
                Search For a song
              </h1>
              <p className="lead text-center search-welcome">... any song</p>
              <form>
                <div className="form-group myForm">
                  <input
                    type="text"
                    className="form-control form-control-lg myInput"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
