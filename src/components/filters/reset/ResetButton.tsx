import { Group, UnstyledButton, Text } from '@mantine/core';
import { ReactComponent as Close } from '../../../assets/Close.svg';
import { lightBlueFilter, mainBlueFilter } from '../../../constants';

type Props = {
    onClick: () => void;
    disabled: boolean;
};

const styles = {
    '&:hover': {
        filter: lightBlueFilter,
    },
    '&:active': {
        filter: mainBlueFilter,
    },
};

export const ResetButton = ({ onClick, disabled }: Props) => {
    return (
        <UnstyledButton onClick={onClick} type="reset" disabled={disabled} sx={styles}>
            <Group spacing={4} align="flex-end">
                <Text fz="sm" lh="20px" color="grey.3">
                    Сбросить все
                </Text>
                <Close />
            </Group>
        </UnstyledButton>
    );
};
