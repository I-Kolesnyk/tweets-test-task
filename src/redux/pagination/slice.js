import { createSlice } from "@reduxjs/toolkit";

const initialState = { allUsers: null, shownUsers: null, totalPages: 0, tweetsPerPage: 3 };

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    setShownUsers(state, action) {
      state.shownUsers = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setTweetsPerPage(state, action) {
        state.tweetsPerPage = action.payload;
      },
  },
});

export const { setAllUsers, setShownUsers, setTotalPages, setTweetsPerPage } = paginationSlice.actions;
