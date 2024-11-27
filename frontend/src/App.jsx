import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Forms from "./Forms.jsx";
import Login from "./components/Login.jsx";
import Subjects from "./components/Subjects.jsx";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/form" element={<Forms />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
