import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styleAR.css";



const ResetPassword = lazy(() => import("./features/auth/resetPassword/ResetPassword"));
const Login = lazy(() => import("./features/auth/login/Login"));
const Register = lazy(() => import("./features/auth/register/Register"));
const ForgetPassword = lazy(() => import("./features/auth/resetPassword/ForgetPassword"));
const PasswordOTP = lazy(() => import("./features/auth/resetPassword/PasswordOTP"));
const Layout = lazy(() => import("./ui/Layout"));
const Home = lazy(() => import("./routes/Home"));
const Chat = lazy(() => import("./routes/Chat"));
const BlogDetails = lazy(() => import("./routes/BlogDetails"));
const About = lazy(() => import("./routes/About"));
const Blogs = lazy(() => import("./routes/Blogs"));
const Contact = lazy(() => import("./routes/Contact"));
const Categories = lazy(() => import("./routes/Categories"));
const Faq = lazy(() => import("./routes/Faq"));
const HowItWork = lazy(() => import("./routes/HowItWork"));
const OrederDetails = lazy(() => import("./routes/OrderDetails"));
const Purchases = lazy(() => import("./routes/Purchases"));
const ReaquestDetails = lazy(() => import("./routes/ReaquestDetails"));
const RecievedRequest = lazy(() => import("./routes/RecievedRequest"));
const RecievedRequestOrders = lazy(() =>
  import("./routes/RecievedRequestOrders")
);
const Terms = lazy(() => import("./routes/Terms"));
const AddRequest = lazy(() => import("./routes/AddRequest"));
const Requests = lazy(() => import("./routes/Requests"));
const Services = lazy(() => import("./routes/Services"));
const Search = lazy(() => import("./routes/Search"));

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
            <Route path="/forget_password" element={<ForgetPassword/>} />
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
