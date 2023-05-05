import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VIDEO_INFO } from "store/catVideo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const prefetchVideos = () => {
  VIDEO_INFO.forEach((video, index) => {
    const videoElement = document.createElement("video");
    videoElement.src = video.src;
  });
};

prefetchVideos();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
