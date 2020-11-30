import { ExternalLinksContainer } from './ExternalLinks.style';
import { Tooltip } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const linkedin = "https://www.linkedin.com/in/kayo-filipe-oliveira-magrini-silva-3a567657/";
const github = "https://github.com/kafy11";

function ExternalLinks() {
  return (
    <ExternalLinksContainer direction="horizontal">
        <Tooltip title="Abrir perfil no LinkedIn"><a href={linkedin}><LinkedinOutlined /></a></Tooltip>
        <Tooltip title="Abrir perfil no Github"><a href={github}><GithubOutlined /></a></Tooltip>
    </ExternalLinksContainer>
  );
}

export default ExternalLinks;