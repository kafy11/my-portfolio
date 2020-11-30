import styled from 'styled-components';
import { Divider } from 'antd';

export const StyledDivider = styled(Divider)`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const HeaderDivider = (props) => (
    <StyledDivider dashed {...props} />
);

export default HeaderDivider;