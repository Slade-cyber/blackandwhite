import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import HomePage from "./pages/home/homepage/HomePage";
import Discover from "./views/discover";

// ReactDOM'u başlat
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Discover />
  </React.StrictMode>
);
