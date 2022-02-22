import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducers from "./redux/reducers/indexReducer";
import { Provider } from "react-redux";

// inisialisasi Store ( Globalized State )
const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    //agar store bisa diakses oleh semua komponen
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
