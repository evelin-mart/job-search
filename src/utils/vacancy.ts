import { Vacancy } from '../types';

export const createLocationString = (str: string | null) => {
    if (!str) {
        return 'не указано';
    }

    return str.split(',')[0];
};

export const createPayString = ({ payment_from, payment_to, currency }: Vacancy) => {
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
