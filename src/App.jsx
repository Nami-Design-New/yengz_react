import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import { setIsLogged, setUser } from "./redux/slices/authedUser";
import Layout from "./ui/Layout";
import Loader from "./ui/Loader";
import ProtectedRoute from "./routes/ProtectedRoute";
import routesConfig from "./routerConfig";
import useGetProfile from "./features/profile/useGetProfile";
import axios from "./utils/axios";

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;

  const { decodedToken, isExpired } = useJwt(token);

  axios.defaults.headers.common["Authorization"] = `${token}`;

  const {
    data: profile,
    isLoading,
    isFetched,
    refetch,
  } = useGetProfile(id, Boolean(token && id && !isExpired));

  useEffect(() => {
    if (Number(decodedToken?.sub) === id && !isExpired) {
      if (isFetched) {
        dispatch(setUser(profile));
        dispatch(setIsLogged(true));
      } else {
        refetch();
      }
    } else {
      dispatch(setIsLogged(false));
      dispatch(setUser({}));
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [decodedToken?.sub, id, isExpired, profile, isFetched, refetch]);

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
          {routesConfig.map(
            ({ path, element, index, protected: isProtected }) => (
              <Route
                key={path}
                path={path}
                element={
                  isProtected ? (
                    <ProtectedRoute profile={profile}>{element}</ProtectedRoute>
                  ) : (
                    element
                  )
                }
                index={index}
              />
            )
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
