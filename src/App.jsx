import { Route, Routes } from "react-router-dom";
import ResetPassword from "./features/auth/resetPassword/ResetPassword";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import PasswordOTP from "./features/auth/resetPassword/PasswordOTP";
import Layout from "./ui/Layout";
import Home from "./routes/Home";
import Chat from "./routes/Chat";
import BlogDetails from "./routes/BlogDetails";
import About from "./routes/About";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import Categories from "./routes/Categories";
import Faq from "./routes/Faq";
import HowItWork from "./routes/HowItWork";
import OrederDetails from "./routes/OrderDetails";
import Purchases from "./routes/Purchases";
import ReaquestDetails from "./routes/ReaquestDetails";
import RecievedRequest from "./routes/RecievedRequest";
import RecievedRequestOrders from "./routes/RecievedRequestOrders";
import Terms from "./routes/Terms";
import AddRequest from "./routes/AddRequest";
import Requests from "./routes/Requests";
import Services from "./routes/Services";
import Search from "./routes/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/order-details" element={<OrederDetails />} />
          <Route path="/recieved-request" element={<RecievedRequest />} />
          <Route path="requests" element={<Requests />} />
          <Route path="reaquest-details" element={<ReaquestDetails />} />
          <Route path="/request-add" element={<AddRequest />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/daq" element={<Faq />} />
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/password-OTP" element={<PasswordOTP />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Route>
          <Route
            path="/recieved-request-orders"
            element={<RecievedRequestOrders />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
