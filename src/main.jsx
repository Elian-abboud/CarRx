// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // ← هنا
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/Global.css";

// Pages
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import Help from "./Components/Help/Help";
import Contact from "./Components/Contact/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      {/* ← غير BrowserRouter إلى HashRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
