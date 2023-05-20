import { Box, Flex, Paper, Title } from '@mantine/core';
import { Conditions } from '../conditions';
import { Location } from '../location';
import { Vacancy } from '../../../types';
import { ReactComponent as Star } from '../../../assets/Star.svg';
import { useNavigate } from 'react-router';
import { MouseEventHandler, useCallback } from 'react';
import { addFavorite, removeFavorite, useAppDispatch } from '../../../store';

type Props = {
    vacancy: Vacancy;
    short?: true;
};

export const VacancyShort = ({ vacancy, short }: Props) => {
    const { profession, address, id, favorite } = vacancy;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const openFullInfo = useCallback(() => {
        navigate(`/vacancies/${id}`);
    }, [navigate, id]);
    const addToFavorites: MouseEventHandler<SVGSVGElement> = useCallback(
        (e) => {
            e.stopPropagation();
            dispatch(addFavorite(vacancy));
        },
        [dispatch, vacancy],
    );
    const removeFromFavorites: MouseEventHandler<SVGSVGElement> = useCallback(
        (e) => {
            e.stopPropagation();
            dispatch(removeFavorite(id));
        },
        [dispatch, id],
    );

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
                    <Star
                        fill={favorite ? 'blue' : 'none'}
                        onClick={favorite ? removeFromFavorites : addToFavorites}
                    />
                </Box>
            </Flex>
        </Paper>
    );
};
