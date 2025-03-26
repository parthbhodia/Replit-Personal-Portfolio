import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Match the div id in index.html which is "app" not "root"
createRoot(document.getElementById("app")!).render(<App />);
