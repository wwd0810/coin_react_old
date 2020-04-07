import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./styles/global-styles";
import theme from "./styles/theme";
import { ThemeProvider } from "styles/theme-components";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable"; // For IE 11 support

ReactDOM.render(
  <>
    <CookiesProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </CookiesProvider>
  </>,
  document.getElementById("root"),
);
// document.getElementById('root')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
