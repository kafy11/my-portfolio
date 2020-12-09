import { useContext, useEffect, useState } from 'react';
import { useIntl } from "react-intl";
import { Anchor, Link, MainLink, MenuButton, MenuContainer, Sider } from './SideMenu.style';
import ExternalLinks from './ExternalLinks';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { MobileContext } from '../../providers/MobileProvider';
import ThemeToggle from './ThemeToggle';
import LanguageLinks from './LanguageLinks';

function SideMenu() {
  const { formatMessage } = useIntl();
  const lang = id => formatMessage({ id });

  const isMobile = useContext(MobileContext);
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <>
      <MenuButton 
        icon={<CloseOutlined />} 
        style={{ display: (collapsed) ? 'none' : 'block' }}
        onClick={() => setCollapsed(true)}
      />
      <MenuButton 
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
              <Link href="#skills-section" title={lang('skills')} />
              <Link href="#projects-section" title={lang('projects')} />
              <Link href="#contact-section" title={lang('contact')} />
          </Anchor>
          
          <ExternalLinks />

          <LanguageLinks />

          <ThemeToggle />
        </Sider>
      </MenuContainer>
    </>
  );
}

export default SideMenu;