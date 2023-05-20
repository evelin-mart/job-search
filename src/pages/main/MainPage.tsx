import { useAppSelector } from '../../store';
import { Flex, Pagination } from '@mantine/core';
import { Filters } from '../../components/filters';
import { VacanciesList } from '../../components/vacancy';
import { SearchForm } from '../../components/search';
import { usePagination } from '../../hooks';

export const MainPage = () => {
    const { vacancies } = useAppSelector();
    const { list, total, page, handleSetPage } = usePagination(vacancies);

    return (
        <Flex justify="space-between" align="start" wrap="wrap" gap={28} pt={{ base: 0, sm: 16 }}>
            <Filters />
            <Flex direction="column" gap={16} align="stretch" sx={{ flex: '1 0 50%' }}>
                <SearchForm />
                <VacanciesList vacancies={list} />
                <Pagination position="center" total={total} value={page} onChange={handleSetPage} />
            </Flex>
        </Flex>
    );
};
