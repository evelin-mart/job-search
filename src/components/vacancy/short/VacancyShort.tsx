import { Flex, Paper, Title } from '@mantine/core';
import { Conditions } from '../conditions';
import { Location } from '../location';
import { Vacancy } from '../../../types';
import { useNavigate } from 'react-router';
import { MouseEventHandler, useCallback } from 'react';
import { addFavorite, removeFavorite, useAppDispatch } from '../../../store';
import { StarButton } from '../button';

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
    const addToFavorites: MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.stopPropagation();
            dispatch(addFavorite(vacancy));
        },
        [dispatch, vacancy],
    );
    const removeFromFavorites: MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.stopPropagation();
            dispatch(removeFavorite(id));
        },
        [dispatch, id],
    );

    return (
        <Paper
            data-elem={`vacancy-${id}`}
            radius={12}
            p={24}
            onClick={short ? openFullInfo : undefined}
            withBorder
            sx={{
                cursor: short ? 'pointer' : 'default',
            }}
        >
            <Flex justify="space-between" align="start" gap="xs">
                <Flex direction="column" gap={short ? 12 : 16}>
                    <Title
                        order={3}
                        fz={short ? 20 : 28}
                        lh={1.2}
                        color={short ? 'light-blue.4' : 'inherit'}
                    >
                        {profession}
                    </Title>
                    <Conditions size={short ? 16 : 20} vacancy={vacancy} />
                    <Location address={address} />
                </Flex>
                <StarButton
                    id={id}
                    favorite={favorite}
                    add={addToFavorites}
                    remove={removeFromFavorites}
                />
            </Flex>
        </Paper>
    );
};
