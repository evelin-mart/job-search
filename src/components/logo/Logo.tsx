import { Group, Title } from '@mantine/core';
import { ReactComponent as Union } from '../../assets/Union.svg';

export const Logo = () => {
    return (
        <Group>
            <Union />
            <Title order={1} fz="1.5rem" lh="2.25rem">
                Jobored
            </Title>
        </Group>
    );
};
