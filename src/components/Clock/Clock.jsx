import { useState } from "react";
import "./styles/clock-style.css";

function Clock() {
  let current_time = new Date().toLocaleTimeString("pt-BR");
  const [time, setTime] = useState(current_time);

  const updateTime = () => {
    current_time = new Date().toLocaleTimeString("pt-BR");
    setTime(current_time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1 className="time">{time}</h1>
    </div>
  );
}

export default Clock;
