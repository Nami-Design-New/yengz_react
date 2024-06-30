import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import ToTopOnNavigation from "./utils/ToTopOnNavigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

/*---------- fontawesome ----------*/
import "./Assets/styles/all.min.css";
/*---------- bootstrap ------------*/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
/*---------- toastify css ---------*/
import "../node_modules/react-toastify/dist/ReactToastify.css";
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
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
