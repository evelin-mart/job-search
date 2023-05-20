import { Vacancy, VacancyFull } from '../types';

export const createLocationString = (str: string | null) => {
    if (!str) {
        return 'не указано';
    }

    return str.split(',')[0];
};

export const createPayString = ({ payment_from, payment_to, currency }: VacancyFull) => {
    if (!payment_from && !payment_to) {
        return 'з/п не указана';
    }
    if (payment_from && !payment_to) {
        return `з/п от ${payment_from} ${currency}`;
    }
    if ((!payment_from && payment_to) || payment_from === payment_to) {
        return `з/п ${payment_to} ${currency}`;
    }
    return `з/п ${payment_from}-${payment_to} ${currency}`;
};

export const trimVacancies = (vacancies: VacancyFull[], fav: Vacancy[]): Vacancy[] => {
    const ids = fav.map((f) => f.id);

    return vacancies.map((v) => ({
        id: v.id,
        profession: v.profession,
        pay: createPayString(v),
        type: v.type_of_work.title,
        address: createLocationString(v.address),
        text: v.vacancyRichText,
        favorite: ids.includes(v.id),
    }));
};
