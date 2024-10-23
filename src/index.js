import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RatingStars />
    <RatingStars starCount={10} />
    <RatingStars starCount={7} size={20} color="blue" /> */}
  </React.StrictMode>
);
