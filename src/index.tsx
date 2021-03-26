import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Switch, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/useAuthContext";
import { debugContextDevtool } from "react-context-devtool";
import { Provider } from "react-redux";
import store from "./app/store";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./styles";


const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  container
);

debugContextDevtool(container, { debugContext: true, debugReducer: true });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
