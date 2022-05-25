import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(true); // uses removeChild
  const [count, setCount] = useState(0);

  const [toggleAccessibility, setToggleAccessibility] = useState(true);
  const [color, setColor] = useState("#E53D00");
  useEffect(() => {
    let colors = [
      "#E53D00",
      "#FFE900",
      "#FCFFF7",
      "#21A0A0",
      "#046865",
      "#001021",
      "#1481BA",
      "#11B5E4"
    ];
    let i = 0;
    let interval = setInterval(() => {
      i++;
      setColor(colors[i % 8]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: color,
          transition: "background-color 300ms ease",
          ensureAccessibility: toggleAccessibility
        }}
      >
        <img
          src={logo}
          onClick={() => setShow(show => !show)}
          style={{ opacity: show ? 1 : 0.3 }}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button onClick={() => setCount(c => c + 1)}>Press me!</button>
        <p>I have been pressed {count} times.</p>
        <br />
        <button onClick={() => setToggleAccessibility(acc => !acc)}>
          accessibility mode {toggleAccessibility.toString()}
        </button>
      </header>
    </div>
  );
};

export default App;
