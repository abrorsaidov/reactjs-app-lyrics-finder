import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    function changeTitle() {
      document.querySelector("title").innerText = "Lyrics Finder || About";
      document.querySelector(".search-container").style.display = "none";
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
            This little web application was created with JS library - React.
          </p>
          <br />
          <p className="card-text about-page-text">
            It fetches data from{" "}
            <a href="https://www.musixmatch.com/" target="_blank">
              MusixMatch
            </a>
          </p>
          <p className="card-text about-page-text">
            Credits go to: <br />
            <a href="https://www.musixmatch.com/" target="_blank">
              MusixMatch
            </a>{" "}
            (for the actual data), <br />
            <a href="https://www.pexels.com/" target="_blank">
              Pexels
            </a>{" "}
            (for the amazing background image) and <br />
            <a href="https://fontawesome.com/" target="_blank">
              FontAwesome
            </a>{" "}
            (for the neat, cool icons){" "}
          </p>
          <p>
            Here is my 👉{" "}
            <a href="https://github.com/abrorsaidov" target="_blank">
              Github
            </a>{" "}
            and 👉{" "}
            <a href="https://instagram.com/abrorsaidov4545" target="_blank">
              Instagram
            </a>
          </p>
          <p className="card-text about-page-text">
            Let me know what You think about it 😉
          </p>
          <br />
          <br />
          <p className="card-text about-page-text">Enjoy 🎧☺️</p>
          <p className="card-text about-page-text">©️ 2020</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
