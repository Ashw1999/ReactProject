import React, { useState } from "react";
import "../Styles/AdminLogin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:2000/Admins?email=${email}&password=${password}`)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("OTP", Math.ceil(Math.random() * 10000));
        alert("log In Sucessfull");
        navigate("/adminmain");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  }

  return (
    <div className="AdminLogin">
      <form action="" className="form">
        <label htmlFor="">Email:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
        />
        <label htmlFor="">Password :</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button onClick={login}>Login</button>
        <p>
          New User?<Link to="/UserSignUp">Register</Link>
        </p>
      </form>
    </div>
  );
}
