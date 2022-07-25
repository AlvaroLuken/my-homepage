import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjectGridItem } from '../components/grid-item';
import mooncat1 from '../public/images/mooncat1.png';
import mooncat2 from '../public/images/mooncat2.png';
import mooncat3 from '../public/images/mooncat3.png';

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem id="mooncat1" title="Mooncat1" thumbnail={mooncat1}>
              Mooncat #1
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="mooncat2" title="Mooncat2" thumbnail={mooncat2}>
              Mooncat #2
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="mooncat3" title="Mooncat3" thumbnail={mooncat3}>
              Mooncat #3
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Old Works
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects;