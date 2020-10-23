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
console.log(a);
console.log(b);
console.log(c);

const navbar = document.querySelector(".navbar");
navbar.style.backgroundColor = "rgba(123, 232,45)";
