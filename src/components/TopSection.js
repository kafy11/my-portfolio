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

const TopSection = () => (
    <Section id="header-section">
        <SectionTitle level={1}>Kayo Silva</SectionTitle>
        <SectionSubTitle level={5}>Analista de Sistemas Senior / Desenvolvedor Mobile Full Stack</SectionSubTitle>
        
        <HeaderDivider />

        <Space direction="vertical">
            <ItemList>+7 anos de experiência com desenvolvimento Full Stack</ItemList>
            <ItemList>+4 anos de experiência com desenvolvimento Mobile Híbrido (iOS e Android)</ItemList>
            <ItemList>Projetos internacionais</ItemList>
            <ItemList>Otimização em perfomance de sites</ItemList>
            <ItemList>OCE em SQL <a href="https://www.youracclaim.com/badges/f0785f4e-f289-45b4-ba8f-4c5277f80a21/linked_in_profile"><LinkOutlined /></a></ItemList>
        </Space>
    </Section>
);

export default TopSection;