import { useIntl } from "react-intl";
import styled from 'styled-components';
import { Space } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { HeaderDivider, ItemList, Section, SubTitle, Title } from '.';

export const SectionTitle = styled(Title)`
    &.ant-typography{
        font-size: 76px;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.palette.mainTitleColor};
    }
`;

export const SectionSubTitle = styled(SubTitle)`
    &&{
        font-size: 24px;
    }
`;

const TopSection = () => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    return (
        <Section id="header-section">
            <SectionTitle level={1}>Kayo Silva</SectionTitle>
            <SectionSubTitle level={5}>{lang('topSectionSubtitle')}</SectionSubTitle>
            
            <HeaderDivider />

            <Space direction="vertical">
                <ItemList>{lang('fullStackExperience')}</ItemList>
                <ItemList>{lang('mobileExperience')}</ItemList>
                <ItemList>{lang('internationalProjects')}</ItemList>
                <ItemList>{lang('webOptimization')}</ItemList>
                <ItemList>{lang('oce')} <a href="https://www.youracclaim.com/badges/f0785f4e-f289-45b4-ba8f-4c5277f80a21/linked_in_profile" target="_blank"><LinkOutlined /></a></ItemList>
            </Space>
        </Section>
    );
}

export default TopSection;