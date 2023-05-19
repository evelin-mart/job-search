import { useEffect } from 'react';
import { Flex } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../store';
import { VacancyShort } from '../short';
import { getVacancies } from '../../../store/reducer';

export const VacanciesList = () => {
    const { vacancies, loader } = useAppSelector();
    const dispatch = useAppDispatch();

    useEffect(() => {
        loader.init().then(() => dispatch(getVacancies({})));
    }, []);

    return (
        <Flex direction="column" gap={16} align="stretch" sx={{ flex: '1 0 50%' }}>
            {vacancies.map((vacancy) => (
                <VacancyShort key={vacancy.id} vacancy={vacancy} />
            ))}
        </Flex>
    );
};
