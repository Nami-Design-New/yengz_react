import { createSlice } from "@reduxjs/toolkit";

export const appLoader = createSlice({
  name: "appLoader",
  initialState: {
    appLoader: false
  },
  reducers: {
    setLoader: (state, action) => {
      state.appLoader = action.payload;
    }
  }
});

export const { setLoader } = appLoader.actions;
export default appLoader.reducer;
