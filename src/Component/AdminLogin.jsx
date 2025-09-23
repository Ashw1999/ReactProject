import React, { useState } from "react";
import "../Styles/AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    axios
      .get(`http://localhost:2000/Admins`, {
        params: { email, password },
      })
      .then((res) => {
        if (res.data.length > 0) {
          localStorage.setItem("OTP", Math.ceil(Math.random() * 10000));
          alert("Login Successful");
          navigate("/admin-main"); // ✅ Fixed route case
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Login Failed. Please try again.");
      });
  }

  return (
    <div className="AdminLogin">
      <form onSubmit={login} className="form">
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
        <p>
          New Admin? <Link to="/admin-signup">Register</Link>
        </p>
      </form>
    </div>
  );
}
