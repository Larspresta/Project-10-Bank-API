import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      console.log('Token:', state.token);
    },
    login: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateProfile: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { login, setToken, logout, updateProfile } = authSlice.actions;

export const getToken = (state) => state.auth.token;
export const getUsername = (state) => state.auth.user;
