import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface User {
  id: string;
  sub: string;
  name: string;
  number: string;
  address: string;
  lat: number;
  Orders?: {
    nextToken: string | null;
  } | null;
  Baskets?: {
    nextToken: string | null;
  } | null;
  lng: number;
  createdAt: string;
  updatedAt: string;
}

export interface DbUserState {
  dbUser: User | null;
}

const initialState: DbUserState = {
  dbUser: null,
};

export const dbUserSlice = createSlice({
  name: 'dbUser',
  initialState,
  reducers: {
    addDbUser: (
      state,
      action: PayloadAction<{
        dbUser: User;
      }>,
    ) => {
      state.dbUser = action.payload.dbUser;
    },
    removeDbUser: state => {
      state.dbUser = null;
    },
  },
});

export const dbUserData = (state: RootState) => state.dbUser.dbUser;

export const { addDbUser, removeDbUser } = dbUserSlice.actions;
export default dbUserSlice.reducer;
