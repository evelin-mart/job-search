import { Button, Flex, Text } from '@mantine/core';
import { useAppSelector } from '../../store';
import { VacanciesList } from '../../components/vacancy';
import { usePagination } from '../../hooks';
import { NotFound } from '../../components/not-found';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { ROUTES } from '../../constants';
import { StyledPagination } from '../../components/pagination';

export const FavoritesPage = () => {
    const { favorites } = useAppSelector();
    const navigate = useNavigate();
    const { list, total, page, handleSetPage } = usePagination(favorites);
    const handleClick = useCallback(() => {
        navigate(ROUTES.HOME);
    }, [navigate]);

    return list.length ? (
        <Flex direction="column" gap={20} m="auto" maw={773}>
            <VacanciesList vacancies={list} />
            <StyledPagination onChange={handleSetPage} total={total} value={page} />
        </Flex>
    ) : (
        <NotFound>
            <Text fz={{ base: 16, sm: 24 }} lh={1.25} fw={700}>
                Упс, здесь еще ничего нет!
            </Text>
            <Button onClick={handleClick}>Поиск Вакансий</Button>
        </NotFound>
    );
};
