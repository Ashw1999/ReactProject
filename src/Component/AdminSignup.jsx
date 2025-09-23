import React, { useState } from "react";
import "../Styles/AdminSignUp.css";
import axios from "axios";

export default function AdminSignUp() {
  const [admin, setAdmin] = useState({
    uname: "",
    phone: "",
    age: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function signUp(e) {
    e.preventDefault();
    console.log("Form submitted"); // For debugging

    setIsSubmitting(true);
    axios
      .post("http://localhost:2000/Admins", admin)
      .then((res) => {
        alert("Admin created successfully!");
        console.log(res);
        // Clear the form
        setAdmin({
          uname: "",
          phone: "",
          age: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        alert("Signup failed. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AdminSignUp">
      <div className="Thumbnail">
        <img
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Admin signup"
        />
      </div>

      <div className="forms">
        <form onSubmit={signUp}>
          <label>Name :</label>
          <input
            onChange={handleChange}
            value={admin.uname}
            name="uname"
            type="text"
            required
            placeholder="Enter the name"
          />

          <label>Phone :</label>
          <input
            type="tel"
            onChange={handleChange}
            name="phone"
            value={admin.phone}
            pattern="^[0-9]{10}$"
            required
            placeholder="Enter phone number"
            title="Phone number must be exactly 10 digits"
          />

          <label>Age :</label>
          <input
            type="number"
            onChange={handleChange}
            value={admin.age}
            name="age"
            required
            min="18"
            max="100"
            title="agewa ke daltai ho"
            placeholder="Enter your age"
          />

          <label>Email :</label>
          <input
            type="email"
            onChange={handleChange}
            value={admin.email}
            name="email"
            required
            placeholder="Enter the email"
          />

          <label>Password :</label>
          <input
            type="password"
            onChange={handleChange}
            value={admin.password}
            name="password"
            required
            placeholder="Enter the password"
          />

          <button type="submit" >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
