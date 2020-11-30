import styled from 'styled-components';
import { Space } from 'antd';
import { HeaderDivider, ItemList, Section, Title } from '.';

const OrDivider = styled(HeaderDivider)`
    &&{
        margin: 0;
        color: rgba(0, 0, 0, 0.25);
    }
`;

const Or = styled.span`
    color: #000;
`;

const StyledP = styled.p`
    font-size: 16px;
`;

const ContactSection = () => (
    <Section id="contact-section">
        <Title level={1}>Contato</Title>
        <HeaderDivider />

        <Space direction="vertical" size={0}>
            <StyledP>Se possível, aproveite um tempo para me contatar e passar um feedback atráves de:</StyledP>
            <ItemList>Mensagem privada no meu <a href="https://www.linkedin.com/in/kayo-filipe-oliveira-magrini-silva-3a567657/"><b>LinkedIn</b></a></ItemList>
            <OrDivider orientation="left"><Or>ou</Or></OrDivider>
            <ItemList>Envie um email para <a href="mailto:kayofilipe@hotmail.com"><b>kayofilipe@hotmail.com</b></a> </ItemList>
            <OrDivider orientation="left"><Or>ou</Or></OrDivider>
            <ItemList>Pelo meu número <b>(11) 94126-9472</b> </ItemList>
        </Space>
    </Section>
);

export default ContactSection;