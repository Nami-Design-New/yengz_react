import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
