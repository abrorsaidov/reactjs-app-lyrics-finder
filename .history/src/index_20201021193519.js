import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const tl = gsap.timeline({ defaults: { ease: "power.out" } });
//const navbar = document.querySelector(".navbar");
tl.to(".navbar", { y: "100%", duration: 1, stagger: 0.25 });
// setInterval(() => {
//   // let a = Math.floor(Math.random() * 255);
//   // let b = Math.floor(Math.random() * 255);
//   // let c = Math.floor(Math.random() * 255);
//   //navbar.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
// }, 1);
