import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
