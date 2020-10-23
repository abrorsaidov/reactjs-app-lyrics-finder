import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: "",
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  findTrack = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.trackTitle}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        // this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          console.log(value);
          return (
            <div className="card card-body mb-4 p-4 search-container">
              <h1 className="display-4 text-center search-heading">
                Search For a song
              </h1>
              <p className="lead text-center search-welcome">... any song</p>
              <form onSubmit={this.findTrack}>
                <div className="form-group myForm">
                  <input
                    type="text"
                    className="form-control form-control-lg myInput"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange.bind(this)}
                  />
                  <button type="submit" className="mySearchBtn">
                    <i class="fas fa-search "></i>
                  </button>
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
