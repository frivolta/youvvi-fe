import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

const GlobalStyle = createGlobalStyle`
  html{
    min-height:100%;/* make sure it is at least as tall as the viewport */
    position:relative;
  }
  body, #root {
    min-height:100%;
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
