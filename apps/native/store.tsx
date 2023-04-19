import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSliceReducer from './features/authUser';
import dbUserSliceReducer from './features/dbUser';

const rootReducer = combineReducers({
  authUser: userSliceReducer,
  dbUser: dbUserSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
