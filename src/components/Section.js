import styled from 'styled-components';

export const Container = styled.section`
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Section = ({ id, className, children }) => (
    <Container id={id} className={className}>
        {children}
    </Container>
);

export default Section;