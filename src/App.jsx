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
import ProjectsOrders from "./routes/ProjectsOrders";
import ProtectedRoute from "./routes/ProtectedRoute";

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
          <Route
            path="/add-service"
            element={
              <ProtectedRoute>
                <AddServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-service/:id"
            element={
              <ProtectedRoute>
                <AddServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchases"
            element={
              <ProtectedRoute>
                <Purchases />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchases/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recieved-orders"
            element={
              <ProtectedRoute>
                <RecievedOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recieved-orders/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          {/* projects routes */}
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-project"
            element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-project/:id"
            element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects-orders"
            element={
              <ProtectedRoute>
                <ProjectsOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects-orders/:id"
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            }
          />

          {/* profile routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/verify-user"
            element={
              <ProtectedRoute>
                <AuthVerifySteps />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifcations />
              </ProtectedRoute>
            }
          />

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
