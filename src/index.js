import React from "react";
import ReactDOM from "react-dom";
import Poll from "./poll";
import "./styles.css";

const initChoices = [
  { name: "choice 1", total: 0, classes: ["choice"] },
  { name: "choice 2", total: 0, classes: ["choice"] }
];

function App() {
  return (
    <div className="App">
      <Poll polls={initChoices} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
