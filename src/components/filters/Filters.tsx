import { SearchParamsType } from '../../store/types';
import { useForm } from '@mantine/form';
import {
    Flex,
    Group,
    Paper,
    Title,
    UnstyledButton,
    Text,
    Input,
    NumberInput,
    Button,
} from '@mantine/core';
import { ReactComponent as Down } from '../../assets/Down.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';

type FormState = Omit<SearchParamsType, 'keyword'>;

export const Filters = () => {
    const form = useForm<FormState>();

    return (
        <Paper p={20} radius={12} sx={{ flex: '0 0 315px' }}>
            <Flex align="center" justify="space-between" pb={32}>
                <Title order={3} fz={20} lh={1}>
                    Фильтры
                </Title>
                <UnstyledButton>
                    <Group spacing={4} align="flex-end">
                        <Text fz="sm" lh="20px">
                            Сбросить все
                        </Text>
                        <Close />
                    </Group>
                </UnstyledButton>
            </Flex>
            <form>
                <Flex direction="column" align="stretch" gap={20}>
                    <Input
                        title="Отрасль"
                        placeholder="Выберете отрасль "
                        component="select"
                        rightSection={<Down />}
                        radius={8}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Input>
                    <NumberInput placeholder="От" min={0} step={1000} radius={8} />
                    <NumberInput placeholder="До" min={0} step={1000} radius={8} />
                    <Button radius={8}>Применить</Button>
                </Flex>
            </form>
        </Paper>
    );
};
