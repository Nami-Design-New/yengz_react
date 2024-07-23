import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useJwt } from "react-jwt";
import { setIsLogged, setUser } from "../redux/slices/authedUser";

const useAuth = () => {
  const dispatch = useDispatch();
  const [cookies, , removeCookie] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const { decodedToken, isExpired } = useJwt(token || "");
  const [loading, setLoading] = useState(false);

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
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("load");
    if (token && id) {
      setLoading(true);
      if (decodedToken && decodedToken?.sub === id) {
        axios.defaults.headers.common["Authorization"] = `${token}`;
        getProfile(id).finally(() => setLoading(false));
      } else if (isExpired) {
        removeCookie("token", { path: "/" });
        removeCookie("id", { path: "/" });
        dispatch(setIsLogged(false));
        delete axios.defaults.headers.common["Authorization"];
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [token, id, decodedToken, isExpired, dispatch, removeCookie]);

  return { loading };
};

export default useAuth;
