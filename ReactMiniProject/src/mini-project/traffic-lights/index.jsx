import React, { useEffect, useState } from "react";
import config from "./config";

const TrafficLights = () => {
  const [light, currentLight] = useState("red");
  const [currentDuration, setCurrentDuration] = useState(
    config[light].duration
  );
  useEffect(() => {
    let timerId;
    if (currentDuration <= 0) {
      clearTimeout(timerId);
      currentLight(config[light].next);
      setCurrentDuration(Number(config[config[light].next].duration));
    } else {
      timerId = setInterval(() => {
        setCurrentDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [currentDuration, light]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "150px",
          background: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "120px",
            width: "120px",
            background: light == "red" ? "red" : "grey",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            height: "120px",
            width: "120px",
            background: light == "yellow" ? "yellow" : "grey",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            height: "120px",
            width: "120px",
            background: light == "green" ? "green" : "grey",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <p>{currentDuration / 1000} seconds</p>
    </div>
  );
};

export default TrafficLights;
