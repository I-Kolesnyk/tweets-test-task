import { createSelector } from '@reduxjs/toolkit';

import { selectFilterValue } from 'redux/filter/selectors';

export const selectAllUsers = state => state.pagination.allUsers;
export const selectShownUsers = state => state.pagination.shownUsers;
export const selectTweetsPerPage = state => state.pagination.tweetsPerPage;
export const selectTotalPages = state => state.pagination.totalPages;
export const selectCurrentPage = state => state.pagination.currentPage;

export const selectFilteredUsers = createSelector(
  [selectShownUsers, selectFilterValue],
  (users, filter) => {
    if (filter === 'all') {
      return users;
    } else if (filter === 'follow') {
      return users.filter(item => localStorage.getItem(item.id) === 'follow');
    } else if (filter === 'following') {
      return users.filter(
        item => localStorage.getItem(item.id) === 'following'
      );
    } else {
      return users;
    }
  }
);
