import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {CurrentPageContextProvider} from "./PageContext";


ReactDOM.render(
    <CurrentPageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CurrentPageContextProvider>,
document.getElementById("root")
);