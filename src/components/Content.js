import styled from 'styled-components';
import { Layout } from 'antd';

const StyledContent = styled(Layout.Content)`

`;

const Content = ({ children }) => <StyledContent>{children}</StyledContent>;

export default Content;