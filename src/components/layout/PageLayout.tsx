import React from 'react';
import { Header } from '../header';

type Props = {
    children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
