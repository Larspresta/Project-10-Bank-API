import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const userLogin = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const data = await authService.login(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  userInfo: null,
  userToken: localStorage.getItem('userToken'),
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.userInfo = null;
      state.userToken = null;
    },
    setCredentials: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.userToken = action.payload.userToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.token;
        localStorage.setItem('userToken', action.payload.token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
