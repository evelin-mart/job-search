import { Header, Container, Flex, Group, MediaQuery, Burger, Stack, Drawer } from '@mantine/core';
import { Logo } from '../logo';
import { Navigation } from '../navigation';
import { useDisclosure } from '@mantine/hooks';

export const AppHeader = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Header height={{ base: 60, sm: 84 }} p={{ base: 12, sm: 24 }} withBorder={false}>
                <Container maw={1116} p={0}>
                    <MediaQuery largerThan="sm" styles={{ justifyContent: 'start', gap: 280 }}>
                        <Flex align="center" justify="space-between" gap={20}>
                            <Logo toggleNavbar={close} />
                            <MediaQuery largerThan="sm" styles={{ display: 'flex' }}>
                                <Group spacing={60} sx={{ display: 'none' }}>
                                    <Navigation />
                                </Group>
                            </MediaQuery>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    size="md"
                                    opened={opened}
                                    onClick={opened ? close : open}
                                    mr={10}
                                />
                            </MediaQuery>
                        </Flex>
                    </MediaQuery>
                </Container>
            </Header>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Drawer opened={opened} onClose={close}>
                    <Stack align="center" spacing={40} pt={40} onClick={close}>
                        <Navigation />
                    </Stack>
                </Drawer>
            </MediaQuery>
        </>
    );
};
