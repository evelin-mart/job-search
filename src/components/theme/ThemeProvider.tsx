import { MantineProvider } from '@mantine/core';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    return (
        <MantineProvider
            theme={{
                defaultRadius: 8,
                black: '#232134',
                colors: {
                    'light-blue': [
                        '#DEECFF',
                        '#C9E0FF',
                        '#B7D6FF',
                        '#92C1FF',
                        '#5E96FC',
                        '#3B7CD3',
                    ],
                    grey: ['#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
                },
                activeStyles: {
                    backgroundColor: '#3B7CD3',
                },
                components: {
                    Button: {
                        styles: () => ({
                            root: {
                                backgroundColor: '#5E96FC',
                            },
                            '&:hover': {
                                backgroundColor: '#92C1FF',
                            },
                        }),
                    },
                },
            }}
        >
            {children}
        </MantineProvider>
    );
};
