import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="card lyricsContainer">
        <h5 className="card-header">
          About
          <span className="text-secondary"> Lyrics Finder App</span>
        </h5>
        <div className="card-body">
          <p className="card-text">This web-app fetches data from MusixMatch</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
