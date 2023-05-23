import { ReactComponent as Search } from '../../assets/Search.svg';
import { Button, MantineTheme, TextInput } from '@mantine/core';
import { getVacancies, useAppDispatch, useAppSelector } from '../../store';
import { useCallback, useState } from 'react';
import { usePagination } from '../../hooks';
import { primaryButtonStyles } from '../../constants';

const styles = (theme: MantineTheme) => ({
    input: {
        borderColor: theme.colors.grey[1],
        borderWidth: 1,
        '&:focus, &:focus-within': {
            borderColor: theme.colors.lightblue[4],
        },
    },
    rightSection: {
        width: 83,
    },
});

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
            data-elem="search-input"
            icon={<Search />}
            size="md"
            radius="md"
            value={value}
            onChange={onChange}
            rightSection={
                <Button
                    data-elem="search-button"
                    h={32}
                    w={{ base: 63, sm: 83 }}
                    right={{ base: 0, sm: 12 }}
                    p="0 8px"
                    onClick={handleClick}
                    disabled={isLoading}
                    sx={primaryButtonStyles}
                >
                    Поиск
                </Button>
            }
            placeholder="Введите название вакансии"
            styles={styles}
        />
    );
};
