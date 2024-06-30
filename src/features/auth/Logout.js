import { useEffect } from "react";
import axios from "../../utils/axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setIsLogged, setUser } from "../../redux/slices/authedUser";

const Logout = () => {
  const [, , deleteCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  useEffect(() => {
    const performLogout = async () => {
      try {
        deleteCookie("token");
        const deleteToken = await axios.post("/user/logout", { token: token });
        if (deleteToken.data.code === 200) {
          delete axios.defaults.headers.common["Authorization"];
          dispatch(setUser({}));
          dispatch(setIsLogged(false));
          dispatch(logout());
          navigate("/");
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    performLogout();
  }, [token]);

  return null;
};

export default Logout;
