import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"





const Layout = () => {
  return (
    <div className="layoutContainer">
        <Navbar />
      <div className="contnet">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
};

export default Layout;
