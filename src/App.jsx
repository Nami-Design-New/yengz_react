import axios from "./utils/axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { setIsLogged, setUser } from "./redux/slices/authedUser";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import Layout from "./ui/Layout";
import Home from "./routes/Home";
import BlogDetails from "./routes/BlogDetails";
import About from "./routes/About";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import Categories from "./routes/Categories";
import Faq from "./routes/Faq";
import HowItWork from "./routes/HowItWork";
import OrderDetails from "./routes/OrderDetails";
import Purchases from "./routes/Purchases";
import RequestDetails from "./routes/RequestDetails";
import RecievedRequest from "./routes/RecievedRequest";
import RecievedRequestOrders from "./routes/RecievedRequestOrders";
import Terms from "./routes/Terms";
import AddRequest from "./routes/AddRequest";
import ServiceOrders from "./routes/ServiceOrders";
import Services from "./routes/Services";
import Search from "./routes/Search";
import Logout from "./features/auth/Logout";
import Cart from "./routes/Cart";
import Profile from "./features/profile/Profile";
import EditProfile from "./features/profile/EditProfile";
import Notifcations from "./routes/Notifcations";
import Chats from "./routes/Chats";
import AuthVerifySteps from "./features/auth/verification/AuthVerifySteps";
import AddServices from "./features/services/AddServices";

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const token = cookies?.token;
  const { decodedToken, isExpired } = useJwt(token || "");

  useEffect(() => {
    if (decodedToken && !isExpired) {
      const userId = decodedToken.sub;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = axios.get(`/user/get_profile?id=${userId}`);
      user
        .then((res) => {
          if (res.data.code === 200) {
            dispatch(setUser(res.data.data));
            dispatch(setIsLogged(true));
          } else {
            dispatch(setIsLogged(false));
            dispatch(setUser({}));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isExpired) {
      dispatch(setIsLogged(false));
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [decodedToken, isExpired, dispatch, token, removeCookie]);

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
  }, [lang]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/add-service" element={<AddServices />} />
          <Route path="/edit-service/:id" element={<AddServices />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/recieved-request" element={<RecievedRequest />} />
          <Route path="/service-orders" element={<ServiceOrders />} />
          <Route path="/request-details" element={<RequestDetails />} />
          <Route path="/request-add" element={<AddRequest />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/verify-user" element={<AuthVerifySteps />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifcations />} />
          <Route
            path="/recievedRequestOrders"
            element={<RecievedRequestOrders />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
