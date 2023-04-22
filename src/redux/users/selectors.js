import { createSelector } from '@reduxjs/toolkit';

import { selectFilterValue } from 'redux/filter/selectors';

export const selectUsersItems = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;

export const selectFilteredUsers = createSelector(
  [selectUsersItems, selectFilterValue],
  (usersItems, filter) => {
    return usersItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);