import { ReactComponent as Search } from '../../assets/Search.svg';
import { Button, TextInput } from '@mantine/core';

export const SearchForm = () => {
    return (
        <TextInput
            icon={<Search />}
            size="md"
            radius="md"
            rightSection={
                <Button size="sm" radius="md" h={32} right={28}>
                    Поиск
                </Button>
            }
            placeholder="Введите название вакансии"
        />
    );
};
