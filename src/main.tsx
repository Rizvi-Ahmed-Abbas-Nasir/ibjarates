import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found!");
}

const root = createRoot(rootElement); 

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
