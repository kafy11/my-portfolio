import { useIntl } from "react-intl";
import { Row } from 'antd';
import { HeaderDivider, Section, Title } from '..';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    const { formatMessage } = useIntl();
    const lang = id => formatMessage({ id });

    return (
        <Section id="projects-section">
            <Title level={1}>{lang('projects')}</Title>
            <HeaderDivider />

            <Row gutter={32}>
                <ProjectCard 
                    title="Products CRUD"
                    repoLink="https://github.com/kafy11/products-next-app" 
                    color="blue"
                    description={lang('crudProject')}
                />
                <ProjectCard 
                    title="Webcam Project"
                    repoLink="https://github.com/kafy11/webcam-project" 
                    color="blue"
                    description={lang('webcamProject')}
                />
                <ProjectCard 
                    title="Drumpad"
                    repoLink="https://github.com/kafy11/drumpad-project" 
                    color="blue"
                    description={lang('drumpadProject')}
                />
                <ProjectCard 
                    title="Chat GraphQL"
                    repoLink="https://github.com/kafy11/chat-graphql" 
                    color="green"
                    description={lang('chatAPIProject')}
                />
                <ProjectCard 
                    title="Products GraphQL"
                    repoLink="https://github.com/kafy11/orders-graphql" 
                    color="yellow"
                    description={lang('productsAPIProject')}
                />
                <ProjectCard 
                    title="Amazon Web Scraper"
                    repoLink="https://github.com/kafy11/amazon-scrapy" 
                    color="yellow"
                    description={lang('amazonCrawlerProject')}
                />
            </Row>
        </Section>
    );
}

export default ProjectsSection;