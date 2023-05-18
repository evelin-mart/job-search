export interface Vacancy {
    id: number;
    profession: string;
    currency: string;
    payment_from: number;
    payment_to: number;
    address: string;
    type_of_work: {
        title: string;
    };
    vacancyRichText: string;
}
