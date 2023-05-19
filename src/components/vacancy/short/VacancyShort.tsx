import { Box, Flex, Paper, Title } from '@mantine/core';
import { Conditions } from '../conditions';
import { Location } from '../location';
import { Vacancy } from '../../../types';
import { ReactComponent as Star } from '../../../assets/Star.svg';

type Props = {
    vacancy: Vacancy;
};

export const VacancyShort = ({ vacancy }: Props) => {
    const { profession, address } = vacancy;

    return (
        <Paper radius={12} p={24}>
            <Flex justify="space-between">
                <Flex direction="column" gap={12}>
                    <Title order={3} fz={20} lh={1.2}>
                        {profession}
                    </Title>
                    <Conditions size={16} vacancy={vacancy} />
                    <Location address={address} />
                </Flex>
                <Box>
                    <Star />
                </Box>
            </Flex>
        </Paper>
    );
};
