// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import AboutUs from "./components/AboutUs";
import MissionVision from "./components/MissionVision";
import ContactUs from "./components/ContactUs";
import DataInputForm from "./components/DataInputForm";
import ProfilePage from "./components/ProfilePage"; // Your profile page
import DashboardPage from "./components/DashboardPage";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        <Route path="/register" element={<RegistrationPage />} />
        {/* Registration page route */}
        <Route path="/data-input" element={<DataInputForm />} />{" "}
        {/* Data input page route */}
        <Route path="/about-us" element={<AboutUs />} />{" "}
        {/* About us input page route */}
        <Route path="/mission-vision" element={<MissionVision />} />{" "}
        {/* Mission input page route */}
        <Route path="/contact" element={<ContactUs />} />{" "}
        {/* Mission input page route */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
