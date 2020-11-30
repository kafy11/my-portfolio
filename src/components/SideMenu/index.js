import { Anchor, Link, MainLink, Sider } from './SideMenu.style';
import { Affix } from 'antd';
import ExternalLinks from './ExternalLinks';

function SideMenu() {
  return (
    <Affix>
      <Sider width={200}>
        <Anchor>
            <Link href="#header-section" title={(<MainLink>Kayo Silva</MainLink>)} />
            <Link href="#skills-section" title="Skills" />
            <Link href="#projects-section" title="Projetos" />
            <Link href="#contact-section" title="Contato" />
        </Anchor>
        
        <ExternalLinks />
      </Sider>
    </Affix>
  );
}

export default SideMenu;