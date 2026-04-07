import React, { useState } from "react";
import "../Styles/AdminSignUp.css";
import axios from "axios";

export default function UserSignUp() {
  let [admin, setAdmin] = useState({
    uname: "",
    phone: "",
    age: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function signUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:2000/Admins", admin)
      .then((res) => {
        alert("Admin created Sucessfully");
        console.log(res);
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }
  console.log(admin.uname, admin.email, admin.phone, admin.password, admin.age);

  return (
    <div className="AdminSignUp">
      <div className="Thumbnail">
        <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <form action="">
        <label htmlFor="">Name :</label>
        <input
          onChange={handleChange}
          value={admin.uname}
          name="uname"
          type="text"
          required
          placeholder="Enter the name "
        />

        <label htmlFor="">Phone :</label>
        <input
          type="tel"
          onChange={handleChange}
          name="phone"
          value={admin.phone}
          pattern="^[0-9]{10}$"
          required
          placeholder="Enter phone num "
        />

        <label htmlFor="">Age :</label>
        <input
          type="number"
          onChange={handleChange}
          value={admin.age}
          name="age"
          required
          placeholder="Enter your Age "
        />

        <label htmlFor="">Email :</label>
        <input
          type="email"
          onChange={handleChange}
          value={admin.email}
          name="email"
          required
          placeholder="Enter the email "
        />
        <label htmlFor="">Password :</label>
        <input
          type="password"
          onChange={handleChange}
          value={admin.password}
          name="password"
          required
          placeholder="Enter the Password "
        />
        <button type="button" onClick={signUp}>
          Submit
        </button>
      </form>
    </div>
  );
}
