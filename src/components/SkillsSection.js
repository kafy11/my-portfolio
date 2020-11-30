import { Space, Typography } from 'antd';
import styled from 'styled-components';
import { HeaderDivider, ItemList, Section, Title } from '.';

const SubText = styled(Typography.Text)`
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
`;

const StyledB = styled.b`
    color: #000;
`;

const ItemSpace = styled(Space).attrs(props => ({
    direction: "vertical",
    size: 0
}))`
    width: calc(100% - 1rem);
`;

const SkillsSection = () => (
    <Section id="skills-section">
        <Title level={1}>Skills</Title>
        <HeaderDivider />

        <Space direction="vertical">
            <ItemList>
                <ItemSpace>
                    <span>Desenvolvimento PHP</span> 
                    <SubText><StyledB>Experiência:</StyledB> +7 anos</SubText>
                    <SubText><StyledB>Principais Tarefas:</StyledB> Criação de webservices(Rest e Soap) e back-end para aplicações</SubText>
                    <SubText><StyledB>Maior desafio:</StyledB> Serviço Websocket que faz a comunicação em tempo real entre todos os serviços PHP do sistema</SubText>
                    <SubText><StyledB>Tecnologias: </StyledB>PHP 5, PHP 7, CodeIgniter</SubText>
                </ItemSpace>
            </ItemList>
            <HeaderDivider />
            <ItemList>
                <ItemSpace>
                    <span>Desenvolvimento React</span> 
                    <SubText><StyledB>Experiência:</StyledB> +3 anos</SubText>
                    <SubText><StyledB>Principais Tarefas:</StyledB> Criação de plugins e front-end de aplicações single page</SubText>
                    <SubText><StyledB>Maior desafio:</StyledB> Plugin de uma tabela que rodava um select para puxar os dados e permitia utilizar recursos tais como ordenação, filtros por coluna, paginação, subtabelas e totalizadores</SubText>
                    <SubText><StyledB>Tecnologias: </StyledB>React, Redux, Styled Components, Reactstrap, Ant Design, Apollo</SubText>
                </ItemSpace>
            </ItemList>
            <HeaderDivider />
            <ItemList>
                <ItemSpace>
                    <span>Desenvolvimento React Native</span> 
                    <SubText><StyledB>Experiência:</StyledB> +3 anos</SubText>
                    <SubText><StyledB>Principais Tarefas:</StyledB> Criação de aplicativos mobiles híbridos(iOS e Android)</SubText>
                    <SubText><StyledB>Maior desafio:</StyledB> Utilização de plugins nativos para utilizar recusos do smartphone, como por exemplo, tirar foto com a câmera, login com a digital e leitura de QR code </SubText>
                    <SubText><StyledB>Tecnologias: </StyledB>React Native, Redux, Styled Components, Apollo</SubText>
                </ItemSpace>
            </ItemList>
            <HeaderDivider />
            <ItemList>
                <ItemSpace>
                    <span>Desenvolvimento Python</span> 
                    <SubText><StyledB>Experiência:</StyledB> +2 anos</SubText>
                    <SubText><StyledB>Principais Tarefas:</StyledB> Criação de scripts python para manipulação de dados, envio de emails e web scrapers</SubText>
                    <SubText><StyledB>Maior desafio:</StyledB> Sistema de gerenciamento de envio de todos emails do sistema</SubText>
                    <SubText><StyledB>Tecnologias: </StyledB>Python, Pandas, Selenium, Scrapy</SubText>
                </ItemSpace>
            </ItemList>
            <HeaderDivider />
            <ItemList>
                <ItemSpace>
                    <span>Desenvolvimento PL/SQL</span> 
                    <SubText><StyledB>Experiência:</StyledB> +7 anos</SubText>
                    <SubText><StyledB>Principais Tarefas:</StyledB> Criação de procedures para cálculos, importação de arquivos e requests http</SubText>
                    <SubText><StyledB>Maior desafio:</StyledB> Importador de arquivos dinâmicos com layouts definidos por views do banco</SubText>
                </ItemSpace>
            </ItemList>
        </Space>
    </Section>
);

export default SkillsSection;