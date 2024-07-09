import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList = action.payload;
    }
  }
});

export const { addToCart } = cart.actions;
export default cart.reducer;
