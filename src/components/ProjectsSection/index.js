import { useIntl } from "react-intl";
import { Row } from 'antd';
import { HeaderDivider, Section, Title } from '..';
import ProjectCard from './ProjectCard';
import projects from './projects';

const ProjectsSection = () => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    return (
        <Section id="projects-section">
            <Title level={1}>{lang('projects')}</Title>
            <HeaderDivider />

            <Row gutter={32}>
                {projects.map((project, i) => <ProjectCard {...project} key={i.toString()} />)}
            </Row>
        </Section>
    );
}

export default ProjectsSection;