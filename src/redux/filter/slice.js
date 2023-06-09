import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "all" };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const {setFilter} = filterSlice.actions;
