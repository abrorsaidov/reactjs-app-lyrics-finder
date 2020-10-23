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
  findTrack = (dispatch, e) => {
    e.preventDefault();
    // <Consumer>
    //   {(value) => {
    //     const { track_list } = value;
    //     console.log(track_list);
    //   }}
    // </Consumer>;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.trackTitle}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        this.setState({ trackTitle: "" });
        // this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch, track_list } = value;

          console.log(track_list);
          return (
            <div className="card card-body mb-4 p-4 search-container">
              <h1 className="display-4 text-center search-heading">
                Search For a song
              </h1>
              <p className="lead text-center search-welcome">... any song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
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
                    <i className="fas fa-search "></i>
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
