import React from 'react';
import "../Styles/LandingPage.css";  
import { Link } from "react-router-dom"; 
export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Link to="/Admin-login">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" id='img'></img>
        <p> login as Admin </p>
      </Link>
      <Link to="/User-Login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ0rygTw_DT-j_Edu53eB2rDpkBROln0YCDFngUS2yPD9KkMCLZ9pn7wQkp0snRDoalA&usqp=CAU" id='img1'></img>
        <p> login user </p>
      </Link>
    </div>
  );
}