import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Filters/FilterContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/UserContext/UserContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
