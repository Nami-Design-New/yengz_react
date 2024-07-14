import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import axios from "./../utils/axios";
import useGetProfile from "../features/profile/useGetProfile";
import { useJwt } from "react-jwt";
import { setIsLogged, setUser } from "../redux/slices/authedUser";

function useInitializeAuth() {
  const dispatch = useDispatch();
  const [cookies, , removeCookie] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const [loading, setLoading] = useState(true);
  const { decodedToken, isExpired } = useJwt(token || "");
  const { mutate: getProfile } = useGetProfile();

  useEffect(() => {
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
          getProfile(stringId, {
            onError: (error) => {
              console.error("Error fetching profile:", error.message);
              // Handle error (e.g., remove invalid cookies, dispatch logout)
              removeCookie("token");
              removeCookie("id");
              dispatch(setUser({}));
              dispatch(setIsLogged(false));
              delete axios.defaults.headers.common["Authorization"];
            }
          });
        } else if (isExpired) {
          dispatch(setIsLogged(false));
          removeCookie("token");
          removeCookie("id");
          delete axios.defaults.headers.common["Authorization"];
        } else {
          console.log(decodedToken);
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

    initializeAuth();
  }, [decodedToken, isExpired, token, id, getProfile, dispatch, removeCookie]);

  return { loading };
}

export default useInitializeAuth;
