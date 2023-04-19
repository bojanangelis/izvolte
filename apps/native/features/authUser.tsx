import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
  user: {
    email: string;
    sub: string;
    emailAuthenticated: boolean;
  } | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        sub: string;
        emailAuthenticated: boolean;
      }>,
    ) => {
      state.user = {
        email: action.payload.email,
        sub: action.payload.sub,
        emailAuthenticated: action.payload.emailAuthenticated,
      };
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const authUserData = (state: RootState) => state.authUser.user;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
