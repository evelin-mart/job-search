import { Flex, Image } from '@mantine/core';
import { ReactNode } from 'react';
import not_found from '../../assets/Frame.png';

type Props = {
    children: ReactNode;
};

export const NotFound = ({ children }: Props) => {
    return (
        <Flex
            direction="column"
            align="center"
            gap={{ base: 16, sm: 32 }}
            pt={{ base: 60, sm: 120 }}
        >
            <Image src={not_found} alt="Not Found" maw={{ base: 180, sm: 240 }} />
            {children}
        </Flex>
    );
};
