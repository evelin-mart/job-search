import { MantineTheme, NumberInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormState } from '../Filters';
import { greyFilter, lightBlueFilter, mainBlueFilter } from '../../../constants';

type Props = {
    placeholder: string;
    data: string;
    form: UseFormReturnType<FormState>;
    element: string;
};

const styles = (theme: MantineTheme) => ({
    input: {
        borderColor: theme.colors.grey[2],
        '&:focus, &:focus-within': {
            borderColor: theme.colors.lightblue[4],
        },
    },
    rightSection: {
        button: {
            border: 'none',
            alignItems: 'start',
            filter: greyFilter,
            '&:nth-child(1)': {
                alignItems: 'end',
            },
            '&:not(:disabled):hover': {
                backgroundColor: 'transparent',
                filter: lightBlueFilter,
            },
            '&:not(:disabled):active': {
                backgroundColor: 'transparent',
                filter: mainBlueFilter,
            },
        },
    },
});

export const NumberFilter = ({ data, placeholder, form, element }: Props) => {
    return (
        <NumberInput
            data-elem={data}
            placeholder={placeholder}
            min={0}
            step={1000}
            size="md"
            {...form.getInputProps(element)}
            styles={styles}
        />
    );
};
