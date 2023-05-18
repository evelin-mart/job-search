import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { AppStateType, AsyncThunkConfig, SearchParamsType } from './types';
import { Loader } from '../services';
import { ResponseType } from '../types';

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
    loader: new Loader(),
};

export const getVacancies = createAsyncThunk<
    ResponseType,
    Partial<SearchParamsType>,
    AsyncThunkConfig
>('getVacancies', async (options, { getState }) => {
    const { loader, searchParams } = getState();
    const data = await loader.getVacancies({ ...searchParams, ...options });
    return data;
});

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getVacancies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getVacancies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.vacancies = action.payload.objects;
        })
        .addCase(getVacancies.rejected, (state) => {
            state.isLoading = false;
        });
});
