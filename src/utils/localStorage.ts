import { Vacancy } from '../types';

export const saveFavoritesToLocalStorage = (favorites: Vacancy[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
        return JSON.parse(favorites) as Vacancy[];
    }
    return [];
};
