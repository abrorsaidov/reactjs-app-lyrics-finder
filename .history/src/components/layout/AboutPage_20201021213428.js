import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="card lyricsContainer">
        <h5 className="card-header">
          About
          <span className="text-secondary"> Lyrics Finder 🎵</span>
        </h5>
        <div className="card-body">
          <p className="card-text about-page-text">
            This web-app fetches data from MusixMatch
          </p>
          <p className="card-text about-page-text">
            Credits go to: MusixMatch, Pexels{" "}
          </p>
          <p className="card-text about-page-text">
            This web-app fetches data from MusixMatch
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
