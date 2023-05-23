import { MantineTheme, Pagination } from '@mantine/core';

type Props = {
    total: number;
    value: number;
    onChange: (p: number) => void;
};

const styles = (theme: MantineTheme) => ({
    control: {
        '&[data-active]': {
            backgroundColor: theme.colors.lightblue[4],
        },
        '&:not([data-disabled]):hover, &[data-active]:not([data-disabled]):hover': {
            backgroundColor: theme.colors.lightblue[3],
        },
        '&:not([data-disabled]):active': {
            backgroundColor: theme.colors.lightblue[5],
        },
    },
});

export const StyledPagination = ({ onChange, total, value }: Props) => {
    return (
        <Pagination
            position="center"
            total={total}
            radius={4}
            value={value}
            onChange={onChange}
            styles={styles}
        />
    );
};
