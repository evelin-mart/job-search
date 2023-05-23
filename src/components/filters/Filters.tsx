import { SearchParamsType } from '../../store/types';
import { useForm } from '@mantine/form';
import { Flex, Paper, Title, Text, Button } from '@mantine/core';
import { FormEventHandler, useCallback } from 'react';
import { getVacancies, useAppDispatch, useAppSelector } from '../../store';
import { CatalogueCodes, primaryButtonStyles } from '../../constants';
import { usePagination } from '../../hooks';
import { NumberFilter } from './number';
import { SelectFilter } from './select';
import { ResetButton } from './reset';

export type FormState = Omit<SearchParamsType, 'keyword' | 'published'>;

const initialValues: Partial<SearchParamsType> = {
    payment_from: '',
    payment_to: '',
    catalogues: '',
};

export const Filters = () => {
    const { isLoading, searchParams } = useAppSelector();
    const { payment_from, payment_to, catalogues } = searchParams;
    const form = useForm<FormState>({ initialValues: { payment_from, payment_to, catalogues } });
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
        form.setValues(initialValues);
        dispatch(getVacancies(initialValues));
        handleSetPage(1);
    }, [dispatch, form, handleSetPage]);

    return (
        <Paper p={20} radius={12} withBorder sx={{ flex: '0 0 315px' }}>
            <Flex align="center" justify="space-between" pb={32}>
                <Title order={3} fz={20} lh={1}>
                    Фильтры
                </Title>
                <ResetButton disabled={isLoading} onClick={resetFilters} />
            </Flex>
            <form onSubmit={onSubmit}>
                <Flex direction="column" align="stretch" gap={20}>
                    <Flex direction="column" align="stretch" gap={8}>
                        <Text fz={16} lh={1.2} fw={700}>
                            Отрасль
                        </Text>
                        <SelectFilter
                            data="industry-select"
                            placeholder="Выберите отрасль"
                            element="catalogues"
                            form={form}
                            list={CatalogueCodes}
                        />
                    </Flex>
                    <Flex direction="column" align="stretch" gap={8}>
                        <Text fz={16} lh={1.2} fw={700}>
                            Оклад
                        </Text>
                        <NumberFilter
                            data="salary-from-input"
                            element="payment_from"
                            form={form}
                            placeholder="От"
                        />
                        <NumberFilter
                            data="salary-to-input"
                            element="payment_to"
                            form={form}
                            placeholder="До"
                        />
                    </Flex>
                    <Button
                        data-elem="search-button"
                        type="submit"
                        size="md"
                        disabled={isLoading}
                        sx={primaryButtonStyles}
                    >
                        Применить
                    </Button>
                </Flex>
            </form>
        </Paper>
    );
};
