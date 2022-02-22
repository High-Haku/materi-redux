import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  call,
  gantiNama,
  perkalian,
  submitNomer,
} from "./redux/action/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const logger = useSelector((state) => state.logger);
  const dispatch = useDispatch();

  const [nomer, setNomer] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js {logger} </code> and save to reload {counter}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {nomer}
        </a>
        <input type="text" onChange={(e) => setNomer(e.target.value)} />
        <button onClick={() => dispatch(submitNomer(nomer))}>Submit</button>
        <button onClick={() => dispatch(increment())}>Tambah</button>
        <button onClick={() => dispatch(decrement())}>Kurang</button>
        <button onClick={() => dispatch(perkalian())}>Kurang</button>
        {/* <button onClick={() => dispatch(call())}>Panggil</button>
        <button onClick={() => dispatch(gantiNama())}>Ganti Nama</button> */}
      </header>
    </div>
  );
}

export default App;
