export interface SearchParamsType {
    keyword: string;
    payment_from: number;
    payment_to: number;
    catalogues: number;
}

export interface AppStateType {
    searchParams: SearchParamsType;
    vacancies: [];
    isLoading: boolean;
}
