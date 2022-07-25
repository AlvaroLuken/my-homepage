import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Section from '../components/section';

import { WorkGridItem } from '../components/grid-item';

import mooncat1 from '../public/images/mooncat1.png';
import mooncat2 from '../public/images/mooncat2.png';
import mooncat3 from '../public/images/mooncat3.png';

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="mooncat1" title="Mooncat1" thumbnail={mooncat1}>
            Mooncat #1
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="mooncat2" title="Mooncat2" thumbnail={mooncat2}>
            Mooncat #2
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="mooncat3" title="Mooncat3" thumbnail={mooncat3}>
            Mooncat #3
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>
      </Section>
    </Container>
  )
}

export default Projects;