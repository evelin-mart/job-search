import { Flex } from '@mantine/core';
import { Filters } from '../../components/filters';
import { VacanciesList } from '../../components/vacancy';

export const MainPage = () => {
    return (
        <Flex justify="space-between" align='start' wrap="wrap" gap={28} pt={{ base: 0, sm: 16 }}>
            <Filters />
            <VacanciesList />
        </Flex>
    );
};
