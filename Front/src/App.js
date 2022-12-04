import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios"

function App() {
  const [clientInfo, setClient] - useState([]);
  const [acc_no, setAcc_no] = useState("");
  const [age, setAge] = useState("");
  const [c_first, setFirst] = useState("");
  const [c_last, setLast] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://proj174.herokuapp.com/"
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
