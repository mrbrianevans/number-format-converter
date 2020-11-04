import './App.css';

import React from "react";
const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg')} className="App-logo" alt="Number Format Converter" />
        <p>
          TypeScript React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
