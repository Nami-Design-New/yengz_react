import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateEntireCart: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItemFormCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFormCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateEntireCart,
} = cartSlice.actions;
export default cartSlice.reducer;
