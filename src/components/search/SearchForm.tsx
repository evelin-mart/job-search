import { ReactComponent as Search } from '../../assets/Search.svg';
import { Button, TextInput } from '@mantine/core';
import { getVacancies, useAppDispatch, useAppSelector } from '../../store';
import { useCallback, useState } from 'react';
import { usePagination } from '../../hooks';

export const SearchForm = () => {
    const {
        isLoading,
        searchParams: { keyword },
    } = useAppSelector();
    const dispatch = useAppDispatch();
    const { handleSetPage } = usePagination([]);
    const [value, setValue] = useState(keyword);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const handleClick = useCallback(() => {
        dispatch(getVacancies({ keyword: value }));
        handleSetPage(1);
    }, [dispatch, handleSetPage, value]);

    return (
        <TextInput
            icon={<Search />}
            size="md"
            radius="md"
            value={value}
            onChange={onChange}
            rightSection={
                <Button
                    size="sm"
                    radius="md"
                    h={32}
                    right={28}
                    onClick={handleClick}
                    disabled={isLoading}
                >
                    Поиск
                </Button>
            }
            placeholder="Введите название вакансии"
        />
    );
};
