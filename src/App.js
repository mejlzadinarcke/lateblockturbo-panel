
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/bot-status")
        .then(res => res.json())
        .then(setData);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>LateBlockTurbo Panel</h1>
      <p>Status: {data.status}</p>
      <p>Blok: {data.block}</p>
      <p>Reakcija: {data.reactionTime} ms</p>
      <p>Simulacija: {data.simulatedProfit} SOL</p>
      <pre>{data.logs}</pre>
    </div>
  );
}

export default App;
