import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { setIsLogged, setUser } from "./redux/slices/authedUser";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import axios from "./utils/axios";
import Layout from "./ui/Layout";
import Loader from "./ui/Loader";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Chats from "./routes/Chats";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import ProjectDetails from "./routes/ProjectDetails";
import Purchases from "./routes/Purchases";
import Categories from "./routes/Categories";
import EditProfile from "./features/profile/EditProfile";
import Logout from "./features/auth/Logout";
import Login from "./features/auth/login/Login";
import Register from "./features/auth/register/Register";
import ForgetPassword from "./features/auth/resetPassword/ForgetPassword";
import VerifyIdentity from "./features/auth/verification/VerifyIdentity";
import OrderDetails from "./routes/OrderDetails";
import RecievedOrders from "./routes/RecievedOrders";
import Terms from "./routes/Terms";
import Notifcations from "./routes/Notifcations";
import AddServices from "./features/services/AddServices";
import Projects from "./routes/Projects";
import useGetProfile from "./features/profile/useGetProfile";
import ServiceDetails from "./routes/ServiceDetails";
import Services from "./routes/Services";
import ProjectsOrders from "./routes/ProjectsOrders";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProjectsOrdersDetails from "./routes/ProjectsOrdersDetails";
import Privacy from "./routes/Privacy";
import AddProject from "./routes/AddProject";
import AboutPreview from "./routes/AboutPreview";
import VerifyPhone from "./features/auth/verification/VerifyPhone";
import SubCategories from "./routes/SubCategories";
import Complaints from "./routes/Complaints";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector((state) => state.language.lang);
  const queryClient = useQueryClient();

  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;

  const { decodedToken, isExpired } = useJwt(token);

  axios.defaults.headers.common["Authorization"] = `${token}`;
  const { data: profile, isLoading } = useGetProfile(id);

  useEffect(() => {
    if (Number(decodedToken?.sub) === id && !isExpired) {
      queryClient.invalidateQueries(["profile"]);
      dispatch(setIsLogged(true));
      dispatch(setUser(profile));
    }  else {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
      delete axios.defaults.headers.common["Authorization"];
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
          <Route path="/categories/:id" element={<SubCategories />} />

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

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
                <ProjectsOrdersDetails />
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
            path="/verify-identity"
            element={
              <ProtectedRoute>
                <VerifyIdentity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/verify-phone"
            element={
              <ProtectedRoute>
                <VerifyPhone />
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

          <Route
            path="/complaints-suggestions"
            element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/about/preview/:id" element={<AboutPreview />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />

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
