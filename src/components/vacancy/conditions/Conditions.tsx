import { Group, Text, Box } from '@mantine/core';
import { Vacancy } from '../../../types';

type Props = {
    size: number;
    vacancy: Vacancy;
};

export const Conditions = ({ size, vacancy }: Props) => {
    const { pay, type } = vacancy;
    return (
        <Group spacing={12}>
            <Text fz={size} fw="bold" lh="20px">
                {pay}
            </Text>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#7B7C88' }} />
            <Text fz={size} lh="20px">
                {type}
            </Text>
        </Group>
    );
};
