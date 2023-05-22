import { useAppSelector } from '../../store';
import { Flex, Loader, MediaQuery } from '@mantine/core';
import { Filters } from '../../components/filters';
import { VacancyFull } from '../../components/vacancy';
import { SearchForm } from '../../components/search';

export const MainPage = () => {
    const { isLoading } = useAppSelector();

    return (
        <MediaQuery largerThan="sm" styles={{ flexDirection: 'row', alignItems: 'start', gap: 28 }}>
            <Flex
                justify="space-between"
                align="stretch"
                direction="column"
                gap={16}
                pt={{ base: 0, sm: 16 }}
            >
                <Filters />
                <Flex direction="column" gap={16} align="stretch" sx={{ flex: '1 0 50%' }}>
                    <SearchForm />
                    {isLoading ? (
                        <Flex justify="center">
                            <Loader size="md" />
                        </Flex>
                    ) : (
                        <VacancyFull />
                    )}
                </Flex>
            </Flex>
        </MediaQuery>
    );
};
