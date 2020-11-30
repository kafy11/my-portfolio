import styled from 'styled-components';
import { Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const ArrowIcon = styled(RightOutlined)`
    vertical-align: baseline;
    font-size: 0.75rem;
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.palette.primary};
`;

export const Text = styled(Typography.Text)`
    font-size: 16px;
`;

const ItemList = ({ children }) => <Text><ArrowIcon />{children}</Text>;

export default ItemList;