import { createSlice } from "@reduxjs/toolkit";

export const requestRoom = createSlice({
  name: "requestRoom",
  initialState: {
    requestRoom: {}
  },
  reducers: {
    requestChatRoom: (state, action) => {
      state.requestRoom = action.payload;
    }
  }
});

export const { requestChatRoom } = requestRoom.actions;
export default requestRoom.reducer;
