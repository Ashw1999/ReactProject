import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import DashBoard from "./DashBoard";
import AddProducts from "./Addproducts";
import UpdateProduct from "./UpdateProduct";

export default function AdminMain(){
    return (
      <div>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/addProducts" element={<AddProducts/>}/>
          <Route path="/updateProduct" element={<UpdateProduct/>}/>
        </Routes>
        <Footer />
      </div>
    );
}