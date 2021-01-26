import React from "react";
import ReactDom from "react-dom";
import "./styling/index.css"
import reducer , {initialState} from "./reducer"
import {StateProvider} from "./StateProvider"
import App from "./App"

ReactDom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
  </StateProvider>
  ,
  document.getElementById("root")
)