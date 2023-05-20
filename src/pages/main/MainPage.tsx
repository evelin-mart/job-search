import { useAppSelector } from '../../store';
import { Flex } from '@mantine/core';
import { Filters } from '../../components/filters';
import { VacanciesList } from '../../components/vacancy';
import { SearchForm } from '../../components/search';
import { PageControls } from '../../components/pagination';
import { vacanciesPerPage } from '../../constants';

export const MainPage = () => {
    const { vacancies } = useAppSelector();

    return (
        <Flex justify="space-between" align="start" wrap="wrap" gap={28} pt={{ base: 0, sm: 16 }}>
            <Filters />
            <Flex direction="column" gap={16} align="stretch" sx={{ flex: '1 0 50%' }}>
                <SearchForm />
                <VacanciesList vacancies={vacancies} />
                <PageControls total={Math.ceil(vacancies.length / vacanciesPerPage)} />
            </Flex>
        </Flex>
    );
};
