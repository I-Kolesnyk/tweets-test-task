import { createSelector } from "@reduxjs/toolkit";

import { selectFilterValue } from "redux/filter/selectors";

export const selectAllUsers = (state) => state.pagination.allUsers;
export const selectShownUsers = (state) => state.pagination.shownUsers;

export const selectFilteredUsers = createSelector(
  [selectAllUsers, selectFilterValue],
  (users, filter) => {
    if (filter === "all") {
      return users;
    }
    if (filter === "follow") {
      return users.filter(
        (item) => localStorage.getItem(item.id) === "follow" 
      );
    }
    if (filter === "following") {
      return users.filter(
        (item) => localStorage.getItem(item.id) === "following" 
      );
    }
  }
);
