import { BackTop, Layout } from 'antd';
import { 
          ContactSection, Content, PageHead, ProjectsSection, 
          SideMenu, SkillsSection, TopSection 
} from '../src/components';

function App() {
  return (
    <>
      <PageHead />

      <Layout>
        <SideMenu />
        <Content>
          <TopSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Content>
      </Layout>

      <BackTop />
    </>
  );
}

export default App;
