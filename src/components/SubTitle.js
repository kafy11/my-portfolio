import styled from 'styled-components';
import Title from './Title';

const SubTitle = styled(Title)`
    &&&{
        margin-top: 0;
        font-weight: unset;
    }

    &&{
        color: ${({ theme }) => theme.palette.subTitleColor};
    }
`;

export default SubTitle;