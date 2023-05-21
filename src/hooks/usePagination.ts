import { useEffect, useState } from 'react';
import { Vacancy } from '../types';
import { vacanciesPerPage } from '../constants';
import { useLocation } from 'react-router';

export const usePagination = (vacancies: Vacancy[]) => {
    const { search } = useLocation();
    const url = new URL(window.location.href);

    const [page, setPage] = useState(() => {
        const p = url.searchParams.get('page');
        return p ? +p : 1;
    });

    const handleSetPage = (p: number) => {
        if (p > 1) {
            url.searchParams.set('page', `${p}`);
        } else {
            url.searchParams.delete('page');
        }
        history.pushState({}, '', url);
        setPage(p);
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const p = url.searchParams.get('page');
        setPage(p ? +p : 1);
    }, [search]);

    const start = (page - 1) * vacanciesPerPage;
    const end = start + vacanciesPerPage;

    const list = vacancies.slice(start, end);
    const total = Math.ceil(vacancies.length / vacanciesPerPage);

    if (!list.length && page > 1) {
        setPage(page - 1);
    }

    return { list, total, page, handleSetPage };
};
