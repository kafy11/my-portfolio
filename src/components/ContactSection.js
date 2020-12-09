import { useIntl } from "react-intl";
import styled from 'styled-components';
import { Space } from 'antd';
import { HeaderDivider, ItemList, Section, Title } from '.';

const OrDivider = styled(HeaderDivider)`
    &&{
        margin: 0;
    }
`;

const Or = styled.span`
    color: ${({ theme }) => theme.palette.subTextColor};
`;

const StyledP = styled.p`
    font-size: 16px;
`;

const ContactSection = () => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    const or = <Or>{lang('or')}</Or>

    return (
        <Section id="contact-section">
            <Title level={1}>{lang('contact')}</Title>
            <HeaderDivider />

            <Space direction="vertical" size={0}>
                <StyledP>{lang('contactMainLbl')}</StyledP>
                <ItemList>{lang('privateMsg')}<a href="https://www.linkedin.com/in/kayo-filipe-oliveira-magrini-silva-3a567657/" target="_blank"><b>LinkedIn</b></a></ItemList>
                <OrDivider orientation="left">{or}</OrDivider>
                <ItemList>{lang('sendEmail')}<a href="mailto:kayofilipe@hotmail.com"><b>kayofilipe@hotmail.com</b></a> </ItemList>
                <OrDivider orientation="left">{or}</OrDivider>
                <ItemList>{lang('callingMe')}<b>{lang('phoneNumber')}</b> </ItemList>
            </Space>
        </Section>
    );
}

export default ContactSection;