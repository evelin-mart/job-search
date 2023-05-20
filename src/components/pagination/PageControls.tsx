import { Pagination } from '@mantine/core';

type Props = {
    total: number;
};

export const PageControls = ({ total }: Props) => {
    return <Pagination position="center" total={total} />;
};
