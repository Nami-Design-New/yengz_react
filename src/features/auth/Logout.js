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

  useEffect(() => {
    const performLogout = async () => {
      try {
        deleteCookie("token");
        delete axios.defaults.headers.common["Authorization"];
        dispatch(setUser({}));
        dispatch(setIsLogged(false));
        dispatch(logout());
        navigate("/");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    performLogout();
    
  }, []);

  return null;
};

export default Logout;
