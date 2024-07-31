import { useEffect } from "react";
import { useJwt } from "react-jwt";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setIsLogged, setUser } from "../redux/slices/authedUser";
import { useQueryClient } from "@tanstack/react-query";
import axios from "../utils/axios";
import useGetProfile from "../features/profile/useGetProfile";

const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  axios.defaults.headers.common["Authorization"] = `${token}`;
  const { decodedToken, isExpired } = useJwt(token);
  const { data: profile, isLoading } = useGetProfile(id);

  useEffect(() => {
    if (Number(decodedToken?.sub) === id && !isExpired) {
      dispatch(setIsLogged(true));
      dispatch(setUser(profile));
      queryClient.invalidateQueries(["profile", id]);
    } else {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
    }
  }, [decodedToken?.sub, id, isExpired, profile]);

  return isLoading;
};

export default useAuth;
