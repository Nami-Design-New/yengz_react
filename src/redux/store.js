import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserSlice from "./slices/authenticatedUserSlice";
import languageSlice from "./slices/languageSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authenticatedUserSlice,
    language: languageSlice,
    cart: cartSlice,
  },
});
