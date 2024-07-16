import { configureStore } from "@reduxjs/toolkit";
import authedUser from "./slices/authedUser";
import language from "./slices/language";
import cart from "./slices/cart";
import requestRoom from "./slices/requctRoom";

export const store = configureStore({
  reducer: {
    authedUser,
    language,
    cart,
    requestRoom
  }
});
