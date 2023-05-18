import { Loader } from '../services';
import { Vacancy } from '../types';

export interface SearchParamsType {
    keyword: string;
    payment_from: number;
    payment_to: number;
    catalogues: number;
}

export interface AppStateType {
    searchParams: SearchParamsType;
    vacancies: Vacancy[];
    isLoading: boolean;
    loader: Loader;
}

export interface AsyncThunkConfig {
    state: AppStateType;
}
