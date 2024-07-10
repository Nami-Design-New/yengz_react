import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Loader from "./Loader";

const Layout = ({ children }) => {
  return (
    <>
        <div className="layoutContainer">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <MobileNav />
        </div>
      
    </>
  );
};

export default Layout;
