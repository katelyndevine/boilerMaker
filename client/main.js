//entry file

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
// import "./style.css";
// import Routes from

render(
  // pass store in provider
  <Provider store={store}>
    {/* <Routes /> */}
    <div>Hello World!</div>
  </Provider>,
  document.getElementById("app")
);
