import { Group, Title } from '@mantine/core';
import { ReactComponent as Union } from '../../assets/Union.svg';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants';

export const Logo = () => {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(ROUTES.HOME);
    }, [navigate]);

    return (
        <Group onClick={onClick}>
            <Union />
            <Title order={1} fz="1.5rem" lh="2.25rem">
                Jobored
            </Title>
        </Group>
    );
};
