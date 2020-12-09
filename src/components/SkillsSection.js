import { useIntl } from "react-intl";
import { Space, Typography } from 'antd';
import styled from 'styled-components';
import { HeaderDivider, ItemList, Section, Title } from '.';

const SubText = styled(Typography.Text)`
    color: ${({ theme }) => theme.palette.subTextColor};
    font-size: 14px;
`;

const StyledB = styled.b`
    color: ${({ theme }) => theme.palette.textColor};
`;

const ItemSpace = styled(Space).attrs(props => ({
    direction: "vertical",
    size: 0
}))`
    width: calc(100% - 1rem);
`;

const SkillsSection = () => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    return (
        <Section id="skills-section">
            <Title level={1}>Skills</Title>
            <HeaderDivider />

            <Space direction="vertical">
                <ItemList>
                    <ItemSpace>
                        <span>{lang('phpDev')}</span> 
                        <SubText><StyledB>{lang('experience')}:</StyledB> +7 {lang('years')}</SubText>
                        <SubText><StyledB>{lang('mainTasks')}:</StyledB> {lang('phpTasks')}</SubText>
                        <SubText><StyledB>{lang('biggestChallenge')}:</StyledB> {lang('phpChallenge')}</SubText>
                        <SubText><StyledB>{lang('techs')}: </StyledB>PHP 5, PHP 7, CodeIgniter</SubText>
                    </ItemSpace>
                </ItemList>
                <HeaderDivider />
                <ItemList>
                    <ItemSpace>
                        <span>{lang('reactDev')}</span> 
                        <SubText><StyledB>{lang('experience')}:</StyledB> +3 {lang('years')}</SubText>
                        <SubText><StyledB>{lang('mainTasks')}:</StyledB> {lang('reactTasks')}</SubText>
                        <SubText><StyledB>{lang('biggestChallenge')}:</StyledB> {lang('reactChallenge')}</SubText>
                        <SubText><StyledB>{lang('techs')}: </StyledB>React, Redux, Styled Components, Reactstrap, Ant Design, Apollo</SubText>
                    </ItemSpace>
                </ItemList>
                <HeaderDivider />
                <ItemList>
                    <ItemSpace>
                        <span>{lang('reactNativeDev')}</span> 
                        <SubText><StyledB>{lang('experience')}:</StyledB> +3 {lang('years')}</SubText>
                        <SubText><StyledB>{lang('mainTasks')}:</StyledB> {lang('reactNativeTasks')}</SubText>
                        <SubText><StyledB>{lang('biggestChallenge')}:</StyledB> {lang('reactNativeChallenge')} </SubText>
                        <SubText><StyledB>{lang('techs')}: </StyledB>React Native, Redux, Styled Components, Apollo</SubText>
                    </ItemSpace>
                </ItemList>
                <HeaderDivider />
                <ItemList>
                    <ItemSpace>
                        <span>{lang('pythonDev')}</span> 
                        <SubText><StyledB>{lang('experience')}:</StyledB> +2 {lang('years')}</SubText>
                        <SubText><StyledB>{lang('mainTasks')}:</StyledB> {lang('pythonTasks')}</SubText>
                        <SubText><StyledB>{lang('biggestChallenge')}:</StyledB> {lang('pythonChallenge')}</SubText>
                        <SubText><StyledB>{lang('techs')}: </StyledB>Python, Pandas, Selenium, Scrapy</SubText>
                    </ItemSpace>
                </ItemList>
                <HeaderDivider />
                <ItemList>
                    <ItemSpace>
                        <span>{lang('plsqlDev')}</span> 
                        <SubText><StyledB>{lang('experience')}:</StyledB> +7 {lang('years')}</SubText>
                        <SubText><StyledB>{lang('mainTasks')}:</StyledB> {lang('plsqlTasks')}</SubText>
                        <SubText><StyledB>{lang('biggestChallenge')}:</StyledB> {lang('plsqlChallenge')}</SubText>
                    </ItemSpace>
                </ItemList>
            </Space>
        </Section>
    );
}

export default SkillsSection;