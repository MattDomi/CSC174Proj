import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios"

function App() {
  const [clientInfo, setClient] = useState([]);
  const [acc_no, setAcc_no] = useState("");
  const [age, setAge] = useState("");
  const [c_first, setFirst] = useState("");
  const [c_last, setLast] = useState("");
  const [phone, setPhone] = useState("");


  const enterForm = (e) => {
    try{
      Axios.post("http://localhost:3000/insert", {
        clientInfo: clientInfo,
        acc_no: acc_no,
        age: age,
        c_first: c_first,
        c_last: c_last,
        phone: phone,
      });
    }
    catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    Axios.get("http://localhost:3000/select").then((response) => {
      setClient(response.data.rows);
      console.log(response.data.rows);})}, []);

  return (
    <div className="App">
      <header className="AppointmentBooker">
        <img src={'http://cdn.onlinewebfonts.com/svg/img_19487.png'} className="App-logo" alt="logo" />
        <p>Please enter the following: </p>
        <form onSubmit={enterForm}>
          <label>First name: <input onChange={(e) => setFirst(e.target.value)}
          value={c_first}></input>
          </label><br />
          <label>Last name: <input onChange={(e) => setLast(e.target.value)}
          value={c_last}></input>
          </label><br />
          <label>Phone: <input onChange={(e) => setPhone(e.target.value)}
          value={phone}></input>
          </label><br />
          <label>Age: <input onChange={(e) => setAge(e.target.value)}
          value={age}></input>
          </label><br />
          <button type="ENTER">Submit
          </button>
        </form>
        <br /><br />
        <table>
        <tbody>
          {clientInfo.map((val, key) => (
            <tr key={key}>
              <td>{val.c_first}</td>
              <td> {val.c_last}</td>
              <td>{val.phone}</td>
              <td>{val.age}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;