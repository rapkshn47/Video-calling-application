import ReactDOM from "react-dom";
import React from "react";
import "./style.css";
import App from "./App";
import { ContextProvider } from "./SocketContext";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);
