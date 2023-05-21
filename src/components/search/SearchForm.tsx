import { ReactComponent as Search } from '../../assets/Search.svg';
import { Button, TextInput } from '@mantine/core';
import { getVacancies, useAppDispatch } from '../../store';
import { useCallback, useRef } from 'react';

export const SearchForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const handleClick = useCallback(() => {
        dispatch(getVacancies({ keyword: ref.current?.value }));
    }, [dispatch]);

    return (
        <TextInput
            icon={<Search />}
            ref={ref}
            size="md"
            radius="md"
            rightSection={
                <Button size="sm" radius="md" h={32} right={28} onClick={handleClick}>
                    Поиск
                </Button>
            }
            placeholder="Введите название вакансии"
        />
    );
};
