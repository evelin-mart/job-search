import { Vacancy } from '../types';

export interface SearchParamsType {
    keyword: string;
    payment_from: number | '';
    payment_to: number | '';
    catalogues: string;
    published: 1;
}

export interface AppStateType {
    searchParams: SearchParamsType;
    vacancies: Vacancy[];
    favorites: Vacancy[];
    isLoading: boolean;
}

export interface AsyncThunkConfig {
    state: AppStateType;
}
