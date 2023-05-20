import { Box, Flex } from '@mantine/core';
import { useAppSelector } from '../../store';
import { VacanciesList } from '../../components/vacancy';
import { vacanciesPerPage } from '../../constants';
import { PageControls } from '../../components/pagination';

export const FavoritesPage = () => {
    const { favorites } = useAppSelector();

    return (
        <Box sx={{ flexBasis: 773 }}>
            <Flex direction="column" gap={20}>
                <VacanciesList vacancies={favorites} />
                <PageControls total={Math.ceil(favorites.length / vacanciesPerPage)} />
            </Flex>
        </Box>
    );
};
