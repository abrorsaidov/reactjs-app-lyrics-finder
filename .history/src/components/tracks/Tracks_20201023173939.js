import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";
import NotFound from "../layout/NotFound";
class Tracks extends Component {
  componentDidMount() {
    document.querySelector("title").innerText = "Lyrics Finder || Home";
    document.querySelector(".search-container").style.display = "block";
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading, notfound } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else if (notfound) {
            return <NotFound />;
          } else {
            return (
              <React.Fragment>
                <div className="row">
                  <h3 className="text-center mb-4 col-12 mt-3">{heading}</h3>
                  {track_list.map((item) => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
