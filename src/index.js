import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/scss/styles.css";
import "antd/dist/antd.css";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
