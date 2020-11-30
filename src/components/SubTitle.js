import styled from 'styled-components';
import Title from './Title';

const SubTitle = styled(Title)`
    &&&{
        margin-top: 0;
        font-weight: unset;
    }

    &&{
        color: rgba(0, 0, 0, 0.5);
    }
`;

export default SubTitle;