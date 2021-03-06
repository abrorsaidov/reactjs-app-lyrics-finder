import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import NotFound from "../layout/NotFound";

class Search extends Component {
  state = {
    trackTitle: "",
    notFound: false,
  };
  componentDidMount() {
    if (document.querySelector("title").innerText === "Lyrics Finder || Home") {
      document.querySelector(".search-container").style.display = "block";
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  findTrack = (dispatch, track_list, e) => {
    e.preventDefault();
    const loadSpinner = () => {
      dispatch({
        type: "WAIT_LYRICS",
      });
    };
    loadSpinner();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.trackTitle}&page_size=24&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message,
        });
        this.setState({ trackTitle: "" });
        if (res.data.message.header.available === 0) {
          this.setState({ notFound: true });
          document.querySelector(".container-mine").style.display = "none";
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch, track_list } = value;
          if (this.state.notFound) {
            return <NotFound />;
          } else {
            return (
              <div className="card card-body mb-4 p-4 search-container">
                <h1 className="display-4 text-center search-heading">
                  Search For a song
                </h1>
                <p className="lead text-center search-welcome">... any song</p>
                <form
                  onSubmit={this.findTrack.bind(this, dispatch, track_list)}
                >
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
          }
        }}
      </Consumer>
    );
  }
}

export default Search;
