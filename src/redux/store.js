import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { filterSlice } from "./filter/slice";
import { usersApi } from "./users/usersApi";

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['value']
};

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    filter: persistReducer(filterPersistConfig, filterSlice.reducer) ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
