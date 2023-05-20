import { useLocation } from 'react-router';
import { useAppSelector } from '../store';

export const useVacancy = () => {
    const { pathname } = useLocation();
    const { vacancies } = useAppSelector();
    const id = +pathname.split('/').reverse()[0];
    const vacancy = vacancies.find((el) => el.id === id);

    return vacancy;
};
