import { useIntl } from "react-intl";
import { Space, Tooltip } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ExternalLinksContainer = styled(Space)`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 1rem 0 1rem;
  font-size: 1.5rem;

  & a:hover{
    cursor: pointer;
  }
`;

const Link = styled.a.attrs(() => ({
  target: '_blank'
}))`
    color: ${({ theme }) => theme.palette.siderExternalLinksColor};
`;


const linkedin = "https://www.linkedin.com/in/kayo-filipe-oliveira-magrini-silva-3a567657/";
const github = "https://github.com/kafy11";

function ExternalLinks() {
  const { formatMessage } = useIntl();
  const lang = id => formatMessage({ id });

  return (
    <ExternalLinksContainer direction="horizontal">
        <Tooltip title={lang('openLinkedin')}><Link href={linkedin}><LinkedinOutlined /></Link></Tooltip>
        <Tooltip title={lang('openGithub')}><Link href={github}><GithubOutlined /></Link></Tooltip>
    </ExternalLinksContainer>
  );
}

export default ExternalLinks;