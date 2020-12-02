import { useContext, useEffect, useState } from 'react';
import { Anchor, Link, MainLink, MenuButton, MenuContainer, Sider } from './SideMenu.style';
import ExternalLinks from './ExternalLinks';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { MobileContext } from '../../providers/MobileProvider';
import ThemeToggle from './ThemeToggle';

function SideMenu() {
  const isMobile = useContext(MobileContext);
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

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

          <ThemeToggle />
        </Sider>
      </MenuContainer>
    </>
  );
}

export default SideMenu;