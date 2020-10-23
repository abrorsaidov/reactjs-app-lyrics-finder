import React from "react";

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card mb-2 shadow-sm">
        <div className="card-body m-1">
          <h5>{track.artist_name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Track;
