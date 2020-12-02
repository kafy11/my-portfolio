import { BackTop, Layout } from 'antd';
import styled from 'styled-components';
import { 
          ContactSection, Content, PageHead, ProjectsSection, 
          SideMenu, SkillsSection, TopSection 
} from '../src/components';

const StyledLayout = styled(Layout)`
  ${({ theme }) => `
    background-color: ${theme.palette.mainBgColor};
    color: ${theme.palette.textColor};
  `}
`;

function App() {
  return (
    <>
      <PageHead />

      <StyledLayout>
        <SideMenu />
        <Content>
          <TopSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Content>
      </StyledLayout>

      <BackTop />
    </>
  );
}

export default App;
