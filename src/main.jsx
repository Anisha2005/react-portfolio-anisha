import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ Set dark as default ONLY if no theme saved
const savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");
} else if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);