export interface VacancyFull {
    id: number;
    profession: string;
    currency: string;
    payment_from: number;
    payment_to: number;
    town: {
        title: string;
    };
    type_of_work: {
        title: string;
    };
    vacancyRichText: string;
}

export interface Vacancy {
    id: number;
    profession: string;
    pay: string;
    type: string;
    address: string;
    text: string;
    favorite: boolean;
}
