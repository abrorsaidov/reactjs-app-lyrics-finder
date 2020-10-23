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
console.log(a);

const navbar = document.querySelector(".navbar");
