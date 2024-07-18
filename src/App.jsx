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
import RecievedOrders from "./routes/RecievedOrders";
import Terms from "./routes/Terms";
import Logout from "./features/auth/Logout";
import Cart from "./routes/Cart";
import EditProfile from "./features/profile/EditProfile";
import Notifcations from "./routes/Notifcations";
import Chats from "./routes/Chats";
import AuthVerifySteps from "./features/auth/verification/AuthVerifySteps";
import AddServices from "./features/services/AddServices";
import Loader from "./ui/Loader";
import Projects from "./routes/Projects";
import useGetProfile from "./features/profile/useGetProfile";
import ServiceDetails from "./routes/ServiceDetails";
import Services from "./routes/Services";
import ProjectDetails from "./routes/ProjectDetails";
import AddProject from "./routes/AddProject";
import Profile from "./routes/Profile";

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const [loading, setLoading] = useState(true);
  const { decodedToken, isExpired } = useJwt(token || "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const { data: profile, isLoading, error } = useGetProfile(id);

  useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
      dispatch(setIsLogged(true));
    } else if (error) {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
    }
  }, [profile, error, dispatch]);

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
          <Route path="/about" element={<About />} />
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
