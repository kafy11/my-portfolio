import styled from 'styled-components';
import { Space } from 'antd';

export const ExternalLinksContainer = styled(Space)`
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 1rem;
    font-size: 1.5rem;

    & a{
        color: rgba(0, 0, 0, 0.5);
    }

    & a:hover{
        color: rgba(0, 0, 0, 1);
        cursor: pointer;
    }
`;