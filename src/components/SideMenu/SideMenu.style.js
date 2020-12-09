import styled from 'styled-components';
import { Affix, Anchor as AntAnchor, Button, Layout } from 'antd';

export const Anchor = styled(AntAnchor)`
    margin-right: -4px;
    padding-right: 4px;
    margin-left: unset;
    padding-left: unset;
    background-color: rgba(0,0,0,0);

    & .ant-anchor-ink{
        left: unset;
        right: 0;
    }
`;

export const Link = styled(AntAnchor.Link)`
    text-align: right;
    margin-right: 1rem;

    & a{
        color: ${({ theme }) => theme.palette.textColor};
    }
`;

export const MainLink = styled.span`
    font-size: 1.5rem;
`;

export const MenuButton = styled(Button).attrs(props => ({
    type: 'link',
    shape: 'circle'
}))`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
`;

export const MenuContainer = styled(Affix)`
    ${({ type }) => (type == 'floating') ? `
        position: absolute;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        & .ant-anchor-wrapper{
            margin-right: 0px !important;
        }
    ` : ''}
    color: ${({ theme}) => theme.palette.textColor};
`;

export const Sider = styled(Layout.Sider)`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    ${({ theme: { palette }}) => `
        background-color: ${palette.siderBgColor};
        color: ${palette.textColor};
    `}
`;