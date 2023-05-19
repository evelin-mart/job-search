import { Group, Text } from '@mantine/core';
import { ReactComponent as Loc } from '../../../assets/Location.svg';

type Props = {
    address: string;
};

export const Location = ({ address }: Props) => {
    return (
        <Group>
            <Loc />
            <Text>{address}</Text>
        </Group>
    );
};
