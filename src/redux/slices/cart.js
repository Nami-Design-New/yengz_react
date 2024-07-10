import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    cartList: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList = action.payload;
    },
    updateEntireCart: (state, action) => {
      state.cartList = action.payload;
    },
    updateSpesificItem: (state, action) => {
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    }
  }
});

export const { addToCart, updateEntireCart, updateSpesificItem } = cart.actions;
export default cart.reducer;
