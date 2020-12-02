import { Space, Tooltip } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ExternalLinksContainer = styled(Space)`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 1rem;
  font-size: 1.5rem;

  & a:hover{
    cursor: pointer;
  }
`;

const Link = styled.a`
    color: ${({ theme }) => theme.palette.siderExternalLinksColor};
`;


const linkedin = "https://www.linkedin.com/in/kayo-filipe-oliveira-magrini-silva-3a567657/";
const github = "https://github.com/kafy11";

function ExternalLinks() {
  return (
    <ExternalLinksContainer direction="horizontal">
        <Tooltip title="Abrir perfil no LinkedIn"><Link href={linkedin}><LinkedinOutlined /></Link></Tooltip>
        <Tooltip title="Abrir perfil no Github"><Link href={github}><GithubOutlined /></Link></Tooltip>
    </ExternalLinksContainer>
  );
}

export default ExternalLinks;