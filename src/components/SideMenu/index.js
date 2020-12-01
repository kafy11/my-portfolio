import { useEffect, useState } from 'react';
import { Anchor, Link, MainLink, MenuButton, MenuContainer, Sider } from './SideMenu.style';
import ExternalLinks from './ExternalLinks';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';

//cria o media query
const mql = process.browser && window.matchMedia(`(min-width: 800px)`);

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (process.browser) {
      setIsMobile(!mql.matches);
      setCollapsed(!mql.matches);

      mql.addListener(() => {
        setIsMobile(!mql.matches);
        setCollapsed(!mql.matches);
      });
    }
  }, []);

  return (
    <>
      <MenuButton 
        type="link" 
        shape="circle" 
        icon={<CloseOutlined />} 
        style={{ display: (collapsed) ? 'none' : 'block' }}
        onClick={() => setCollapsed(true)}
      />
      <MenuButton 
        type="link" 
        shape="circle" 
        icon={<RightOutlined />} 
        style={{ display: (!collapsed) ? 'none' : 'block' }}
        onClick={() => setCollapsed(false)}
      />

      <MenuContainer type={(isMobile) ? 'floating' : 'fixed'}>
        <Sider 
          width={200} 
          collapsedWidth={0}
          collapsed={collapsed}
        >
          <Anchor>
              <Link href="#header-section" title={(<MainLink>Kayo Silva</MainLink>)} />
              <Link href="#skills-section" title="Skills" />
              <Link href="#projects-section" title="Projetos" />
              <Link href="#contact-section" title="Contato" />
          </Anchor>
          
          <ExternalLinks />
        </Sider>
      </MenuContainer>
    </>
  );
}

export default SideMenu;