import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { appReducer } from './reducer';

export const store = configureStore({
    reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
