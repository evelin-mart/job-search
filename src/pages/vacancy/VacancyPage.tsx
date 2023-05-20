import { Box, Flex, Paper } from '@mantine/core';
import { VacancyShort } from '../../components/vacancy';
import { useVacancy } from '../../hooks';
import { Navigate } from 'react-router';
import { ROUTES } from '../../constants';

export const VacancyPage = () => {
    const vacancy = useVacancy();

    if (!vacancy) {
        return <Navigate to={ROUTES.HOME} />;
    }

    return (
        <Flex direction="column" gap={20} m="auto" maw={773}>
            <VacancyShort vacancy={vacancy} />
            <Paper radius={12} p={24}>
                <Box dangerouslySetInnerHTML={{ __html: vacancy.text }} />
            </Paper>
        </Flex>
    );
};
