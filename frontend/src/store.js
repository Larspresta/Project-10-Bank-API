import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './features/auth/authSlice';
import { authUserApi } from './services/authUserApi';

const store = configureStore({
  reducer: {
    [authUserApi.reducerPath]: authUserApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authUserApi.middleware),
});
export default store;
