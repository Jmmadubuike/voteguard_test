// src/components/LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import VoteGuardLogo from "../assets/voteguard-logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={VoteGuardLogo} alt="VoteGuard Logo" className={styles.logo} />
        <h2 className={styles.title}>Login to VoteGuard</h2>
        <p className={styles.slogan}>
          Ensuring Transparency, Integrity, and Credibility in Elections
        </p>
        <p className={styles.encouragement}>
          Thank you for your commitment to democracy. Your role is crucial in
          ensuring the voice of the people is heard. Together, we protect the
          integrity of our elections.
        </p>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
