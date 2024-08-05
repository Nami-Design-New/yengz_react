import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToTopOnNavigation from "./utils/ToTopOnNavigation";

/*---------- fontawesome ----------*/
import "./Assets/styles/all.min.css";
/*---------- bootstrap ------------*/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
/*---------- toastify css ---------*/
import "../node_modules/react-toastify/dist/ReactToastify.css";
/*---------- swiper css -----------*/
import "swiper/css";
import "swiper/css/pagination";
/*---------- app style global -----*/
import "./Assets/styles/style.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <ToTopOnNavigation />
          <GoogleOAuthProvider
            clientId={`MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgpRDb0v1wHiRED+EZbUm4bj88A8oR9nHTcyjFnZesUNGgCgYIKoZIzj0DAQehRANCAATzontuR9eRN+XkauA5a3aVW4GDJbFGxry8pe3LGsowY4x8n62gruZ8AqNqMwTxGELZCg1UOv8t2gDSbxFEPf3+`}
          >
            <App />
          </GoogleOAuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
