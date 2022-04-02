import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/*" element={<div>Other</div>} />
      </Routes>
      <Link to="/asfkji">F Off</Link>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
