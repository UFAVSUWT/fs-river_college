import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./app/style/style.scss";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./app/store/user-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ user: new UserStore() }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
