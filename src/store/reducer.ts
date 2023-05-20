import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { AppStateType, AsyncThunkConfig, SearchParamsType } from './types';
import { Loader } from '../services';
import { ResponseType } from '../types';
import { removeEmptyFields } from './utils';

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
>('getVacancies', async (options, { getState, dispatch, rejectWithValue }) => {
    dispatch(setSearchParams(options));
    const { loader, searchParams } = getState();
    const params = removeEmptyFields({ ...searchParams, ...options });
    try {
        const data = await loader.getVacancies(params);
        return data;
    } catch (e) {
        rejectWithValue(e);
    }
});

export const setSearchParams = createAction<Partial<SearchParamsType>>('setSearchParams');

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearchParams, (state, action) => {
            state.searchParams = {
                ...state.searchParams,
                ...action.payload,
            };
        })
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
