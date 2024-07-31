import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./ui/Layout";
import Loader from "./ui/Loader";
import ProtectedRoute from "./routes/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import routesConfig from "./routerConfig";

function App() {
  const lang = useSelector((state) => state.language.lang);
  const isLoading = useAuth();

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
                    <ProtectedRoute>{element}</ProtectedRoute>
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
