import { useAppSelector } from '../../store';
import { Flex, Pagination, Text } from '@mantine/core';
import { Filters } from '../../components/filters';
import { VacanciesList } from '../../components/vacancy';
import { SearchForm } from '../../components/search';
import { usePagination } from '../../hooks';
import { NotFound } from '../../components/not-found';

export const MainPage = () => {
    const { vacancies } = useAppSelector();
    const { list, total, page, handleSetPage } = usePagination(vacancies);

    return (
        <Flex justify="space-between" align="start" wrap="wrap" gap={28} pt={{ base: 0, sm: 16 }}>
            <Filters />
            <Flex direction="column" gap={16} align="stretch" sx={{ flex: '1 0 50%' }}>
                <SearchForm />
                {list.length ? (
                    <>
                        <VacanciesList vacancies={list} />
                        <Pagination
                            position="center"
                            total={total}
                            value={page}
                            onChange={handleSetPage}
                        />
                    </>
                ) : (
                    <NotFound>
                        <Text fz={16} lh={1.25} align="center" fw={700}>
                            Упс, по вашему запросу ничего не найдено!
                        </Text>
                    </NotFound>
                )}
            </Flex>
        </Flex>
    );
};
