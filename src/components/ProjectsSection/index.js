import { Row } from 'antd';
import { HeaderDivider, Section, Title } from '..';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
    <Section id="projects-section">
        <Title level={1}>Projetos</Title>
        <HeaderDivider />

        <Row gutter={32}>
            <ProjectCard 
                title="Products CRUD"
                repoLink="https://github.com/kafy11/products-next-app" 
                color="blue"
            >
                <p>Projeto para demonstrar conhecimentos em desenvolvimento de páginas React pré-renderizadas utilizando <b>Next.js</b>, e testes unitários usando <b>Jest</b>.</p>
            </ProjectCard>
            <ProjectCard 
                title="Webcam Project"
                repoLink="https://github.com/kafy11/webcam-project" 
                color="blue"
            >
                <p>Projeto feito com <b>React</b> usando Styled Components e Semantic UI que permite ao usuário visualizar a webcam do computador para adicionar filtros e tirar fotos.</p>
            </ProjectCard>
            <ProjectCard 
                title="Drumpad"
                repoLink="https://github.com/kafy11/drumpad-project" 
                color="blue"
            >
                <p>Drumpad feito com <b>React</b> e <b>Typescript</b> onde o usuário pode tocar sons utilizando o teclado ou mouse, sendo possível colocar o som em loop usando a tecla SHIFT</p>
            </ProjectCard>
            <ProjectCard 
                title="Chat GraphQL"
                repoLink="https://github.com/kafy11/chat-graphql" 
                color="green"
            >
                <p>Uma API de um chat feita com <b>Node</b> que implementa <b>GraphQL</b> para manipulação e visualização dos dados.</p>
            </ProjectCard>
            <ProjectCard 
                title="Products GraphQL"
                repoLink="https://github.com/kafy11/orders-graphql" 
                color="yellow"
            >
                <p>Uma API feita com <b>Python</b> e <b>Flask</b>, que roda dentro de um container <b>Docker</b>, e implementa <b>GraphQL</b> para manipulação e visualização dos dados.</p>
            </ProjectCard>
            <ProjectCard 
                title="Amazon Web Scraper"
                repoLink="https://github.com/kafy11/amazon-scrapy" 
                color="yellow"
            >
                <p>Scraper feito com <b>Python</b> e <b>Scrapy</b> que lê urls de ebooks da Amazon em um arquivo txt e extrai as informações de preço e título.</p>
            </ProjectCard>
        </Row>
    </Section>
);

export default ProjectsSection;