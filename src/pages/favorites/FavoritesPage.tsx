import { Button, Flex, Pagination, Text } from '@mantine/core';
import { useAppSelector } from '../../store';
import { VacanciesList } from '../../components/vacancy';
import { usePagination } from '../../hooks';
import { NotFound } from '../../components/not-found';

export const FavoritesPage = () => {
    const { favorites } = useAppSelector();
    const { list, total, page, handleSetPage } = usePagination(favorites);

    return list.length ? (
        <Flex direction="column" gap={20} m="auto" maw={773}>
            <VacanciesList vacancies={list} />
            <Pagination position="center" total={total} value={page} onChange={handleSetPage} />
        </Flex>
    ) : (
        <NotFound>
            <Text fz={{ base: 16, sm: 24 }} lh={1.25} fw={700}>
                Упс, здесь еще ничего нет!
            </Text>
            <Button>Поиск Вакансий</Button>
        </NotFound>
    );
};
