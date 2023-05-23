import { MantineTheme, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormState } from '../Filters';
import { ReactComponent as Down } from '../../../assets/Down.svg';

type Props = {
    placeholder: string;
    data: string;
    form: UseFormReturnType<FormState>;
    element: string;
    list: {
        label: string;
        value: string;
    }[];
};

const styles = (theme: MantineTheme) => ({
    rightSection: {
        pointerEvents: 'none',
    },
    item: {
        '&[data-selected]': {
            backgroundColor: theme.colors.lightblue[4],
            '&, &:hover': {
                backgroundColor: theme.colors.lightblue[4],
            },
        },
        '&[data-hovered]': {
            backgroundColor: theme.colors.lightblue[0],
        },
    },
    input: {
        borderColor: theme.colors.grey[2],
        '&:focus, &:focus-within': {
            borderColor: theme.colors.lightblue[4],
        },
    },
});

export const SelectFilter = ({ data, placeholder, form, element, list }: Props) => {
    return (
        <Select
            data-elem={data}
            placeholder={placeholder}
            allowDeselect
            searchable
            rightSection={<Down />}
            size="md"
            {...form.getInputProps(element)}
            data={list}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            styles={styles}
        />
    );
};
