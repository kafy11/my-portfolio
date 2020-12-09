import { useIntl } from "react-intl";
import { Card, Col, Space, Tooltip } from 'antd';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

const borderColors = {
    yellow: '#ffe7ba',
    blue: '#69c0ff',
    green: '#95de64'
};

const GitIcon = styled(GithubOutlined)`
    font-size: 18px;
`;

const StyledCard = styled(Card)`
    margin-bottom: 16px;
    min-height: 210px;
    ${({ color }) => color && `border-color:  ${borderColors[color]};`}

    ${({ theme: { palette } }) => `
        color: ${palette.textColor};
        background-color: ${palette.cardBodyBackground};

        & .ant-card-head{
            color: ${palette.textColor};
            background-color: ${palette.cardHeaderBackground};
        }
    `}
`;

const ProjectCard = ({ color, repoLink, title, description }) => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    return (
        <Col className="gutter-row" xs={24} md={12} lg={8}>
            <StyledCard 
                color={color}
                type="inner" 
                title={title}
                extra={(
                    <Space direction="horizontal">
                        <Tooltip title={lang('openRepository')}>
                            <a href={repoLink} target="_blank"><GitIcon /></a>
                        </Tooltip>
                    </Space>
                )}
            >
                <p dangerouslySetInnerHTML={{ __html: description}} />
            </StyledCard>
        </Col>
    );
}

export default ProjectCard;