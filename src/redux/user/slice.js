import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "follow" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {setStatus} = userSlice.actions;
