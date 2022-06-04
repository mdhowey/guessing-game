import React, { Component } from "react";
import NumberGuessingGame from "./components/NumberGuessingGame";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGuessingGame />
      </div>
    );
  }
}

export default App;
