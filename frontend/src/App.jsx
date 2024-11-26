import React, { useEffect, useState } from "react";
import "./App.css";
import Charts from "./components/charts";
import { Button, Dropdown, Modal, Alert } from "react-bootstrap";
import FetchButton from "./components/FetchButton";
import OffCanvas from "./components/OffCanvas";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inbox from "./components/Inbox";
import Forms from "./Forms.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
