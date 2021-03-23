import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuthContext";
import { debugContextDevtool } from "react-context-devtool";
import { Provider } from "react-redux";
import store from "./app/store";
import { App } from "./App";

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

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  container
);

debugContextDevtool(container, { debugContext: true, debugReducer: true });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
