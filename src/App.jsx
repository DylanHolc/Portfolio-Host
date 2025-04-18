import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Projects from "./Projects";
import Résumé from "./Résumé";
import Info from "./Info";
import "./styles/App.scss";

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/résumé" element={<Résumé />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
