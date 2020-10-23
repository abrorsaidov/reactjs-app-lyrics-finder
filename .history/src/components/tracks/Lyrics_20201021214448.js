import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class Lyrics extends Component {
  componentDidMount() {
    document.querySelector("title").innerText = "Lyrics Finder || Lyrics";
  }

  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        this.setState({ track: res.data.message.body.track });
      })

      .catch((err) => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4 goBack">
            <i className="fas fa-angle-double-left"></i>
            Go Back
          </Link>
          <div className="card lyricsContainer">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">
                <pre>{lyrics.lyrics_body}</pre>
              </p>
            </div>
          </div>

          <ul className="list-group mt-3 lyricsUL">
            <li className="list-group-item lyricsDetails">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item lyricsDetails">
              <strong>Track's Genre</strong>:{" "}
              {
                track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>
            {console.log(track)}
            <li className="list-group-item lyricsDetails">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item lyricsDetails">
              <strong>Track Rating</strong>: {track.track_rating}
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;