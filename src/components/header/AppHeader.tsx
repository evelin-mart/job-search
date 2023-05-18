import { Header, Container, Flex, Group } from '@mantine/core';
import { Logo } from '../logo';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const AppHeader = () => {
    return (
        <Header height={{ base: 60, sm: 84 }} p={{ base: 12, sm: 24 }} withBorder={false}>
            <Container maw={1116} p={0}>
                <Flex align="center" justify='space-between'>
                    <Logo />
                    <Group>
                        <NavLink to={ROUTES.HOME}>Поиск Вакансий</NavLink>
                        <NavLink to={ROUTES.FAVORITE}>Избранное</NavLink>
                    </Group>
                </Flex>
            </Container>
        </Header>
    );
};
