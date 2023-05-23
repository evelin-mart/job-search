import { Group, Title } from '@mantine/core';
import { ReactComponent as Union } from '../../assets/Union.svg';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants';

type Props = {
    toggleNavbar: () => void;
};

export const Logo = ({ toggleNavbar }: Props) => {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(ROUTES.HOME);
        toggleNavbar();
    }, [navigate, toggleNavbar]);

    return (
        <Group onClick={onClick} sx={{ cursor: 'pointer' }}>
            <Union />
            <Title order={1} fz="1.5rem" lh="2.25rem" ff="Poppins, sans-serif">
                Jobored
            </Title>
        </Group>
    );
};
