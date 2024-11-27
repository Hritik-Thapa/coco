import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Forms from "./Forms.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/form" element={<Forms />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
