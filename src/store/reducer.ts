import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { AppStateType, SearchParamsType } from './types';

const initialParams: SearchParamsType = {
    keyword: '',
    payment_from: 0,
    payment_to: 0,
    catalogues: 33,
};

const initialState: AppStateType = {
    searchParams: {
        ...initialParams,
    },
    vacancies: [],
    isLoading: false,
};

export const getVacancies = createAsyncThunk('getVacancies', async () => {
    return {};
});

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getVacancies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getVacancies.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(getVacancies.rejected, (state) => {
            state.isLoading = false;
        });
});
