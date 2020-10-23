import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div style={{ marginTop: "50%" }}>
        <img
          src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"
          alt="Error !!!"
          style={{
            width: "80%",
            margin: "40px auto",
            display: "block",
          }}
        />
        <p style={{ marginLeft: "30%" }}>Song or artist not found 😞</p>
      </div>
    );
  }
}

export default NotFound;
