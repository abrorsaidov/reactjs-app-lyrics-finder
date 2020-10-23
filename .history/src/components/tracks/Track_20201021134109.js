import React from "react";
import { Link } from "react-router-dom";

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card mb-2 shadow-sm myCard">
        <div className="card-body m-1">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play-circle"></i> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-block viewBtn"
          >
            <i className="fas fa-angle-double-right"></i>{" "}
            <span className="viewBtnText">View Lyrics</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
