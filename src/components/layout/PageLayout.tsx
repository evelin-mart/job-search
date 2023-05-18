import React from 'react';
import { AppHeader } from '../header';
import { Box, Container } from '@mantine/core';

type Props = {
    children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
    return (
        <>
            <AppHeader />
            <Box sx={{ flexGrow: 1, backgroundColor: '#F7F7F8' }}>
                <Container maw={1116} p={0}>
                    {children}
                </Container>
            </Box>
        </>
    );
};
