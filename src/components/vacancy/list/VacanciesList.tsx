import { Vacancy } from '../../../types';
import { VacancyShort } from '../short';

type Props = {
    vacancies: Vacancy[];
};

export const VacanciesList = ({ vacancies }: Props) => {
    return (
        <>
            {vacancies.map((vacancy) => (
                <VacancyShort key={vacancy.id} vacancy={vacancy} short />
            ))}
        </>
    );
};
