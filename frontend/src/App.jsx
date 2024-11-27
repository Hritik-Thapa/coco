import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Forms from "./Forms.jsx";
import Login from "./components/Login.jsx";
import Subjects from "./components/Subjects.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Notes from "./components/Notes.jsx";
import FlashCards from "./components/FlashCards.jsx";
import Chapters from "./components/Chapters.jsx";
import Quiz from "./components/Quiz.jsx";

const App = () => {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/form" element={<Forms />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
