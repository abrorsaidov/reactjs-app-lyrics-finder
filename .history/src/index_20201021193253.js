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
setInterval(() => {
  // let a = Math.floor(Math.random() * 255);
  // let b = Math.floor(Math.random() * 255);
  // let c = Math.floor(Math.random() * 255);
  tl.to(".navbar", {
    y: "100%",
    duration: 1.5,
    delay: 0.6,
  });

  //navbar.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 1);
