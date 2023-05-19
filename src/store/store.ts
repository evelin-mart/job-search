import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { appReducer } from './reducer';
import { AppStateType } from './types';

export const store = configureStore({
    reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = () => useSelector<AppStateType, AppStateType>((state) => state);
