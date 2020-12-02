import styled from 'styled-components';
import { Typography } from 'antd';

const Title = styled(Typography.Title)`
    &.ant-typography{
        margin-bottom: 0;
        color: ${({ theme }) => theme.palette.textColor};
    }
`;

export default Title;