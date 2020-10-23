import React from "react";

export default () => {
  const spinners = [
    "https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif",
    "https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif",
    "https://media.giphy.com/media/ZbZaqMgYi4HXOWboq6/giphy.gif",
    "https://media.giphy.com/media/11T1gShHejUvPW/giphy.gif",
    "https://media.giphy.com/media/KeF5DouQeE54G9TGWr/giphy.gif",
    "https://media.giphy.com/media/l0He4fJxPCbfqv7Xi/giphy.gif",
    "https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif",
    "https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif",
  ];
  const randomS = Math.floor(Math.random() * (spinners.length - 1));
  return (
    <div>
      <img
        src="https://media.giphy.com/media/ZbZaqMgYi4HXOWboq6/giphy.gif"
        alt="Loading..."
        style={{ width: "400px", margin: "40px auto", display: "block" }}
      />
      <p>Waiting for the data...</p>
    </div>
  );
};
