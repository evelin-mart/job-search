import { Group, Text } from '@mantine/core';
import { ReactComponent as Loc } from '../../../assets/Location.svg';
import { createLocationString } from '../../../utils';

type Props = {
    address: string;
};

export const Location = ({ address }: Props) => {
    return (
        <Group>
            <Loc />
            <Text size="md" lh={1.2}>
                {createLocationString(address)}
            </Text>
        </Group>
    );
};
