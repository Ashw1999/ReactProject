import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Component/LandingPage";
import AdminLogin from "./Component/AdminLogin";
import UserLogin from "./Component/UserLogin";
import AdminSignUp from "./Component/AdminSignUp";
import UserSignUp from "./Component/UserSignUp";
import AdminMain from "./Component/AdminMain";
import DashBoard from "./Component/DashBoard";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<DashBoard />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/admin-main/*" element={<AdminMain />} />
        {/* Optional: Fallback route for 404 */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
