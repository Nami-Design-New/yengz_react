import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/styles/styleAR.css";

const ResetPassword = import("./features/auth/resetPassword/ResetPassword");
const Login = import("./features/auth/login/Login");
const Register = import("./features/auth/register/Register");
const ForgetPassword = import("./features/auth/resetPassword/ForgetPassword");
const PasswordOTP = import("./features/auth/resetPassword/PasswordOTP");
const Layout = import("./ui/Layout");
const Home = import("./routes/Home");
const Chat = import("./routes/Chat");
const BlogDetails = import("./routes/BlogDetails");
const About = import("./routes/About");
const Blogs = import("./routes/Blogs");
const Contact = import("./routes/Contact");
const Categories = import("./routes/Categories");
const Faq = import("./routes/Faq");
const HowItWork = import("./routes/HowItWork");
const OrederDetails = import("./routes/OrderDetails");
const Purchases = import("./routes/Purchases");
const ReaquestDetails = import("./routes/ReaquestDetails");
const RecievedRequest = import("./routes/RecievedRequest");
const RecievedRequestOrders = import("./routes/RecievedRequestOrders");
const Terms = import("./routes/Terms");
const AddRequest = import("./routes/AddRequest");
const Requests = import("./routes/Requests");
const Services = import("./routes/Services");
const Search = import("./routes/Search");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/order_details" element={<OrederDetails />} />
          <Route path="/recieved_request" element={<RecievedRequest />} />
          <Route path="requests" element={<Requests />} />
          <Route path="reaquest_details" element={<ReaquestDetails />} />
          <Route path="/request_add" element={<AddRequest />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog_details" element={<BlogDetails />} />
          <Route path="/how_it_work" element={<HowItWork />} />
          <Route path="/daq" element={<Faq />} />

          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
            <Route path="/password_OTP" element={<PasswordOTP />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Route>
          <Route
            path="/recieved_request_orders"
            element={<RecievedRequestOrders />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
