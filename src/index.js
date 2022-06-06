import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Filters/FilterContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/UserContext/UserContext";
import { VideoProvider } from "./Contexts/VideoContext/VideoContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <UserProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </UserProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
