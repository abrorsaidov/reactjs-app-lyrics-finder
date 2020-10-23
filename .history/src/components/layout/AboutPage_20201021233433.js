import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    function changeTitle() {
      document.querySelector("title").innerText = "Lyrics Finder || About";
    }
    changeTitle();
  });

  return (
    <React.Fragment>
      <div className="card lyricsContainer">
        <h5 className="card-header">
          About
          <span className="text-secondary"> Lyrics Finder 🎵</span>
        </h5>
        <div className="card-body">
          <p className="card-text about-page-text">
            This web-app fetches data from{" "}
            <a href="https://www.musixmatch.com/" target="_blank">
              MusixMatch
            </a>
          </p>
          <p className="card-text about-page-text">
            Credits go to:{" "}
            <a href="https://www.musixmatch.com/" target="_blank">
              MusixMatch
            </a>{" "}
            (for the actual data),{" "}
            <a href="https://www.pexels.com/" target="_blank">
              Pexels
            </a>{" "}
            (for the amazing background image){" "}
          </p>
          <p className="card-text about-page-text">Enjoy ✌🎧</p>
          <p className="card-text about-page-text">©️ 2020</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
