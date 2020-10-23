import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <div className="card-body">
        <p className="card-text">
          <pre>{lyrics.lyrics_body}</pre>
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
