import { SearchParamsType } from '../../store/types';
import { useForm } from '@mantine/form';
import {
    Flex,
    Group,
    Paper,
    Title,
    UnstyledButton,
    Text,
    NumberInput,
    Button,
    Select,
} from '@mantine/core';
import { ReactComponent as Down } from '../../assets/Down.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { FormEventHandler, useCallback } from 'react';
import { getVacancies, useAppDispatch, useAppSelector } from '../../store';
import { catalogues } from '../../constants';
import { usePagination } from '../../hooks';

type FormState = Omit<SearchParamsType, 'keyword'>;

const initialValues: Partial<SearchParamsType> = {
    payment_from: '',
    payment_to: '',
    catalogues: '',
};

export const Filters = () => {
    const { isLoading, searchParams } = useAppSelector();
    const form = useForm<FormState>({ initialValues: { ...searchParams } });
    const dispatch = useAppDispatch();
    const { handleSetPage } = usePagination([]);
    const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(getVacancies(form.values));
            handleSetPage(1);
        },
        [dispatch, form.values, handleSetPage],
    );
    const resetFilters = useCallback(() => {
        form.reset();
        dispatch(getVacancies(initialValues));
        handleSetPage(1);
    }, [dispatch, form, handleSetPage]);

    return (
        <Paper p={20} radius={12} sx={{ flex: '0 0 315px' }}>
            <Flex align="center" justify="space-between" pb={32}>
                <Title order={3} fz={20} lh={1}>
                    Фильтры
                </Title>
                <UnstyledButton onClick={resetFilters} type="reset" disabled={isLoading}>
                    <Group spacing={4} align="flex-end">
                        <Text fz="sm" lh="20px">
                            Сбросить все
                        </Text>
                        <Close />
                    </Group>
                </UnstyledButton>
            </Flex>
            <form onSubmit={onSubmit}>
                <Flex direction="column" align="stretch" gap={20}>
                    <Flex direction="column" align="stretch" gap={8}>
                        <Text fz={16} lh={1.2} fw={700}>
                            Отрасль
                        </Text>
                        <Select
                            placeholder="Выберите отрасль"
                            allowDeselect
                            searchable
                            rightSection={<Down />}
                            radius={8}
                            size="md"
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            {...form.getInputProps('catalogues')}
                            data={catalogues}
                        />
                    </Flex>
                    <Flex direction="column" align="stretch" gap={8}>
                        <Text fz={16} lh={1.2} fw={700}>
                            Оклад
                        </Text>
                        <NumberInput
                            placeholder="От"
                            min={0}
                            step={1000}
                            radius={8}
                            size="md"
                            {...form.getInputProps('payment_from')}
                        />
                        <NumberInput
                            placeholder="До"
                            min={0}
                            step={1000}
                            radius={8}
                            size="md"
                            {...form.getInputProps('payment_to')}
                        />
                    </Flex>
                    <Button type="submit" radius={8} size="md" disabled={isLoading}>
                        Применить
                    </Button>
                </Flex>
            </form>
        </Paper>
    );
};
