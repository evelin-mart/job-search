import { Pagination, Text } from '@mantine/core';
import { VacanciesList } from '../list';
import { NotFound } from '../../not-found';
import { useAppSelector } from '../../../store';
import { usePagination } from '../../../hooks';

export const VacancyFull = () => {
    const { vacancies } = useAppSelector();
    const { list, total, page, handleSetPage } = usePagination(vacancies);

    if (!list.length) {
        return (
            <NotFound>
                <Text fz={16} lh={1.25} align="center" fw={700}>
                    Упс, по вашему запросу ничего не найдено!
                </Text>
            </NotFound>
        );
    }

    return (
        <>
            <VacanciesList vacancies={list} />
            <Pagination position="center" total={total} value={page} onChange={handleSetPage} />
        </>
    );
};
