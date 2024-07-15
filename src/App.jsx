import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { setIsLogged, setUser } from "./redux/slices/authedUser";
import axios from "./utils/axios";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import Layout from "./ui/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Categories from "./routes/Categories";
import Faq from "./routes/Faq";
import HowItWork from "./routes/HowItWork";
import OrderDetails from "./routes/OrderDetails";
import Purchases from "./routes/Purchases";
import RequestDetails from "./routes/RequestDetails";
import RecievedOrders from "./routes/RecievedOrders";
import Terms from "./routes/Terms";
import AddRequest from "./routes/AddRequest";
import ServiceOrders from "./routes/ServiceOrders";
import Services from "./routes/ServiceDetails";
import Search from "./routes/Search";
import Logout from "./features/auth/Logout";
import Cart from "./routes/Cart";
import Profile from "./features/profile/Profile";
import EditProfile from "./features/profile/EditProfile";
import Notifcations from "./routes/Notifcations";
import Chats from "./routes/Chats";
import AuthVerifySteps from "./features/auth/verification/AuthVerifySteps";
import AddServices from "./features/services/AddServices";
import ServiceOrdersDetails from "./routes/ServiceOrdersDetails";
import Loader from "./ui/Loader";
import Projects from "./routes/Projects";
import useGetProfile from "./features/profile/useGetProfile";

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const [loading, setLoading] = useState(true);
  const { decodedToken, isExpired } = useJwt(token || "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const { data: profile, isLoading, isError } = useGetProfile(id);

  useEffect(() => {
    if (profile) {
      console.log(profile);
      dispatch(setUser(profile));
      dispatch(setIsLogged(true));
    } else if (isError) {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
    }
  }, [profile, isError]);

  const initializeAuth = async () => {
    setLoading(true);
    try {
      const stringId = String(id);
      if (
        !decodedToken ||
        typeof decodedToken.sub !== "string" ||
        decodedToken.sub !== stringId ||
        isExpired
      ) {
        dispatch(setIsLogged(false));
        dispatch(setUser({}));
        delete axios.defaults.headers.common["Authorization"];
      }
    } catch (error) {
      console.error("Error during initialization:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, [decodedToken, isExpired, token, id]);

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
  }, [lang]);

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Layout loading={loading}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/service/:id" element={<Services />} />
          <Route path="/add-service" element={<AddServices />} />
          <Route path="/edit-service/:id" element={<AddServices />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/purchases/:id" element={<OrderDetails />} />
          <Route path="/recieved-orders" element={<RecievedOrders />} />
          <Route path="/service-orders" element={<ServiceOrders />} />
          <Route path="/recieved-orders/:id" element={<OrderDetails />} />
          <Route
            path="/service-orders/:id"
            element={<ServiceOrdersDetails />}
          />
          <Route path="/request-details" element={<RequestDetails />} />
          <Route path="/request-add" element={<AddRequest />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/verify-user" element={<AuthVerifySteps />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifcations />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
