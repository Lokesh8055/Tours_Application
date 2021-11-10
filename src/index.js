import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import App from "./components/App";
import Query from "./components/Query";

ReactDOM.render(
  <React.StrictMode>
    <Query>
      <App />
    </Query>
  </React.StrictMode>,
  document.getElementById("root")
);
