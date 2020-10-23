import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let a = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let c = Math.floor(Math.random() * 255);

const navbar = document.querySelector(".navbar");
