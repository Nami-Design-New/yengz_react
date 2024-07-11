import axios from "./utils/axios";
import { useEffect, useState } from "react";
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
import About from "./routes/About";
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

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const [loading, setLoading] = useState(true);
  const { decodedToken, isExpired } = useJwt(token || "");

  const getProfile = async (user_id) => {
    try {
      const res = await axios.get(`/user/get_profile?id=${user_id}`);
      if (res.data.code === 200) {
        dispatch(setUser(res.data.data));
        dispatch(setIsLogged(true));
      } else {
        dispatch(setIsLogged(false));
        dispatch(setUser({}));
      }
    } catch (error) {
      console.error(
        "Error fetching profile:",
        error.response?.data?.message || error.message
      );
    }
  };

  const initializeAuth = async () => {
    setLoading(true);
    try {
      const stringId = String(id);
      if (
        decodedToken &&
        typeof decodedToken.sub === "string" &&
        decodedToken.sub === stringId
      ) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await getProfile(stringId);
      } else if (isExpired) {
        dispatch(setIsLogged(false));
        delete axios.defaults.headers.common["Authorization"];
      } else {
        console.log(
          "No valid token found or mismatch in decodedToken.sub and id."
        );
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

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Layout loading={loading}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/service/:id" element={<Services />} />
          <Route path="/add-service" element={<AddServices />} />
          <Route path="/edit-service/:id" element={<AddServices />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/recieved-request" element={<RecievedRequest />} />
          <Route path="/service-orders" element={<ServiceOrders />} />
          <Route
            path="/service-orders/:id"
            element={<ServiceOrdersDetails />}
          />
          <Route path="/request-details" element={<RequestDetails />} />
          <Route path="/request-add" element={<AddRequest />} />
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
          <Route
            path="/recieved-request-orders"
            element={<RecievedRequestOrders />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
