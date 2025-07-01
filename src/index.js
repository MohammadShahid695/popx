import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; // Correct (with .jsx extension)

// Renders the root React component into the 'root' div in your index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This matches the 'root' div in your index.html
);
