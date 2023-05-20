import { Box, Flex, Paper, Title } from '@mantine/core';
import { Conditions } from '../conditions';
import { Location } from '../location';
import { Vacancy } from '../../../types';
import { ReactComponent as Star } from '../../../assets/Star.svg';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

type Props = {
    vacancy: Vacancy;
    short?: true;
};

export const VacancyShort = ({ vacancy, short }: Props) => {
    const { profession, address, id } = vacancy;
    const navigate = useNavigate();
    const openFullInfo = useCallback(() => {
        navigate(`/vacancies/${id}`);
    }, [navigate, id]);

    return (
        <Paper radius={12} p={24} onClick={short ? openFullInfo : undefined}>
            <Flex justify="space-between" gap="xs">
                <Flex direction="column" gap={short ? 12 : 16}>
                    <Title order={3} fz={short ? 20 : 28} lh={1.2}>
                        {profession}
                    </Title>
                    <Conditions size={short ? 16 : 20} vacancy={vacancy} />
                    <Location address={address} />
                </Flex>
                <Box>
                    <Star />
                </Box>
            </Flex>
        </Paper>
    );
};
