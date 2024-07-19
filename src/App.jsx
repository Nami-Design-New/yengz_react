import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import axios from "./utils/axios";
import Layout from "./ui/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Faq from "./routes/Faq";
import Chats from "./routes/Chats";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import EditProfile from "./features/profile/EditProfile";
import AddProject from "./routes/AddProject";
import ProjectDetails from "./routes/ProjectDetails";
import Purchases from "./routes/Purchases";
import Categories from "./routes/Categories";
import Logout from "./features/auth/Logout";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import AuthVerifySteps from "./features/auth/verification/AuthVerifySteps";
import HowItWork from "./routes/HowItWork";
import OrderDetails from "./routes/OrderDetails";
import RecievedOrders from "./routes/RecievedOrders";
import Terms from "./routes/Terms";
import Notifcations from "./routes/Notifcations";
import AddServices from "./features/services/AddServices";
import Projects from "./routes/Projects";
import useGetProfile from "./features/profile/useGetProfile";
import ServiceDetails from "./routes/ServiceDetails";
import Services from "./routes/Services";
import { setIsLogged, setUser } from "./redux/slices/authedUser";
import Loader from "./ui/Loader";

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;

  const { decodedToken, isExpired } = useJwt(token);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const { data: profile, isLoading } = useGetProfile(id);

  useEffect(() => {
    if (Number(decodedToken?.sub) === id && !isExpired) {
      dispatch(setIsLogged(true));
      dispatch(setUser(profile));
    } else {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
      delete axios.defaults.headers.common["Authorization"];
      console.log("Token is invalid and id matches");
    }
  }, [decodedToken?.sub, id, isExpired, profile]);

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
  }, [lang]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />

          {/* services routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/add-service" element={<AddServices />} />
          <Route path="/edit-service/:id" element={<AddServices />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/purchases/:id" element={<OrderDetails />} />
          <Route path="/recieved-orders" element={<RecievedOrders />} />
          <Route path="/recieved-orders/:id" element={<OrderDetails />} />

          {/* projects routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/edit-project/:id" element={<AddProject />} />

          {/* profile routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/verify-user" element={<AuthVerifySteps />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/notifications" element={<Notifcations />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/faq" element={<Faq />} />

          {/* auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
