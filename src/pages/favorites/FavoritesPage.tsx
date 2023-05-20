import { Flex, Pagination } from '@mantine/core';
import { useAppSelector } from '../../store';
import { VacanciesList } from '../../components/vacancy';
import { usePagination } from '../../hooks';

export const FavoritesPage = () => {
    const { favorites } = useAppSelector();
    const { list, total, page, handleSetPage } = usePagination(favorites);

    return (
        <Flex direction="column" gap={20} m="auto" maw={773}>
            <VacanciesList vacancies={list} />
            <Pagination position="center" total={total} value={page} onChange={handleSetPage} />
        </Flex>
    );
};
