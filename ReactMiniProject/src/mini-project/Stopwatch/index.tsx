import React, { useRef, useState } from "react";
import styled from "styled-components";

const Watch = styled.div`
  height: 300px;
  width: 300px;
  background: #cccccc61;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 0 0 20px #bebebe;
`;
const Text = styled.p`
  font-size: 30px;
  color: purple;
  margin: 0;
`;
const Time = styled.p`
  color: #b4161b;
font-size: 30px;
  margin: 0;
`
const Button = styled.button`
  height: 40px;
  padding: 0 10px;
  margin: 20px auto;
  margin: 20px 2px 0;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  border: none;
  border-radius: 12px;
`
const Stopwatch = () => {
  let animationFrameRef = useRef(0);
  const lastTimer = useRef(0);

  // local state (changing this value rerenders the UI)
  const [time, setTime] = useState(0); // time in ms;
  const [isTimerRunning, setisTimerRunning] = useState(false);
  const timerFn = () => {
    let ms = Date.now() - lastTimer.current;
    setTime(ms);
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };
  const onStart = () => {
    lastTimer.current = Date.now() - time;
    setisTimerRunning(true);
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };

  const onPause = () => {
    setisTimerRunning(false);
    cancelAnimationFrame(animationFrameRef.current);
  };
  const onReset = () => {
    setisTimerRunning(false);
    setTime(0);
    cancelAnimationFrame(animationFrameRef.current);
  };
  const format = (timeInMs: number) => {
    const secondsElapsed = Math.floor(timeInMs / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);

    // Convert the elapsed time to strings
    const milliSeconds = (timeInMs % 1000).toString().padStart(3, "0");
    const seconds = (secondsElapsed % 60).toString().padStart(2, "0");
    const minutes = minutesElapsed.toString().padStart(2, "0");
    return `${minutes}:${seconds}:${milliSeconds}`;
  };
  return (
    <Watch>
      <Text>Stopwatch</Text>
      <Time>{format(time)}</Time>
      <div>
        <Button onClick={onStart}>Start</Button>
        <Button onClick={onPause}>Pause</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
    </Watch>
  );
};

export default Stopwatch;
