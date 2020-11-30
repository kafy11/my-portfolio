import styled from 'styled-components';
import { Anchor as AntAnchor, Layout } from 'antd';

export const MainLink = styled.span`
    font-size: 1.5rem;
`;

export const Sider = styled(Layout.Sider)`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

export const Anchor = styled(AntAnchor)`
    margin-right: -4px;
    padding-right: 4px;
    margin-left: unset;
    padding-left: unset;

    & .ant-anchor-ink{
        left: unset;
        right: 0;
    }
`;

export const Link = styled(AntAnchor.Link)`
    text-align: right;
    margin-right: 1rem;
`;