import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div style={{ marginTop: "15%" }}>
        <img
          src="https://media.giphy.com/media/LbOm2qGo91bZ6/giphy.gif"
          alt="Error !!!"
          style={{
            width: "45%",
            margin: "40px auto",
            display: "block",
          }}
        />
        <p style={{ marginLeft: "30%" }}>Song or artist not found 😞</p>
        <Link to="/" className="btn  btn-block btn-sm mb-2 mt-2  goBack ">
          <i className="fas fa-angle-double-left"></i>
          Go Back Home
        </Link>
      </div>
    );
  }
}

export default NotFound;
