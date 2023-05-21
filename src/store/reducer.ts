import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { AppStateType, AsyncThunkConfig, SearchParamsType } from './types';
import { Loader } from '../services';
import { Vacancy } from '../types';
import { removeEmptyFields } from './utils';
import { getFavoritesFromLocalStorage, trimVacancies } from '../utils';

const initialParams: SearchParamsType = {
    keyword: '',
    payment_from: 0,
    payment_to: 0,
    catalogues: '',
};

const initialState: AppStateType = {
    searchParams: {
        ...initialParams,
    },
    vacancies: [],
    favorites: getFavoritesFromLocalStorage(),
    isLoading: false,
    loader: new Loader(),
};

export const getVacancies = createAsyncThunk<
    Vacancy[],
    Partial<SearchParamsType>,
    AsyncThunkConfig
>('getVacancies', async (options, { getState, dispatch, rejectWithValue }) => {
    dispatch(setSearchParams(options));
    const { loader, searchParams, favorites } = getState();
    const params = removeEmptyFields({ ...searchParams, ...options });
    try {
        const data = await loader.getVacancies(params);
        const vacancies = trimVacancies(data, favorites);
        return vacancies;
    } catch (e) {
        rejectWithValue(e as Error);
    }
    return [];
});

export const setSearchParams = createAction<Partial<SearchParamsType>>('setSearchParams');
export const addFavorite = createAction<Vacancy>('addFavorite');
export const removeFavorite = createAction<number>('removeFavorite');

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearchParams, (state, action) => {
            state.searchParams = {
                ...state.searchParams,
                ...action.payload,
            };
        })
        .addCase(addFavorite, (state, action) => {
            const vacancy = { ...action.payload, favorite: true };
            state.favorites.push(vacancy);
            state.vacancies = state.vacancies.map((v) => (v.id === vacancy.id ? vacancy : v));
        })
        .addCase(removeFavorite, (state, action) => {
            state.favorites = state.favorites.filter((vac) => vac.id !== action.payload);
            state.vacancies = state.vacancies.map((v) =>
                v.id === action.payload ? { ...v, favorite: false } : v,
            );
        })
        .addCase(getVacancies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getVacancies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.vacancies = action.payload;
        })
        .addCase(getVacancies.rejected, (state) => {
            state.isLoading = false;
        });
});
