import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import LogoutButton from "./components/LogoutButton";
import LoginPage from "./components/LoginPage";
import Home from "./pages/Home";

function Contact() {
  return <div style={{ padding: "1rem" }}>Contact Page</div>;
}

function About() {
  return <div style={{ padding: "1rem" }}>About Page</div>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
