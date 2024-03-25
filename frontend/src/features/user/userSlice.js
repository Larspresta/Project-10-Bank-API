/* // userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getUserDetails, registerUser, userLogin } from './userActions';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  builders: {
    // userLogin reducer ...
    // getUserDetails reducer ...
  },
});

// export actions
export const { logout } = userSlice.actions;
export default userSlice.reducer;
 */
