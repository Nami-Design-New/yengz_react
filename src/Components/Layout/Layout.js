import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";



const Layout = () => {
  return (
    <div className="layoutContainer">

      <nav >
        <Navbar />
      </nav>

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
