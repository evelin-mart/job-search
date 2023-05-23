import { UnstyledButton } from '@mantine/core';
import { ReactComponent as Star } from '../../../assets/Star.svg';
import { mainBlueFilter, blue500 } from '../../../constants';
import { MouseEventHandler } from 'react';

type Props = {
    favorite: boolean;
    add: MouseEventHandler<HTMLButtonElement>;
    remove: MouseEventHandler<HTMLButtonElement>;
    id: number;
};

const styles = {
    '&:hover': {
        filter: mainBlueFilter,
    },
    cursor: 'pointer',
};

export const StarButton = ({ add, remove, favorite, id }: Props) => {
    return (
        <UnstyledButton
            sx={styles}
            data-elem={`vacancy-${id}-shortlist-button`}
            onClick={favorite ? remove : add}
        >
            <Star fill={favorite ? blue500 : 'none'} filter={favorite ? mainBlueFilter : 'none'} />
        </UnstyledButton>
    );
};
