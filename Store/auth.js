import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: '',
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    loginAsDonor(state) {
      state.isAuthenticated = 'Donor';
    },
    loginAsHos(state) {
      state.isAuthenticated = 'Hos';
    },
    logout(state) {
      state.isAuthenticated = 'No';
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;