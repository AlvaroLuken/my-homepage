import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { GridItemPractice } from '../components/grid-item-practice';
import todolist from '../public/images/todolist.png';
import add4 from '../public/images/add4.png';
import NextLink from 'next/link';

const Practice = () => (
  <Layout title="Practice">
    <Container>
      <Heading mt={4} as="h4" fontSize={20} mb={4}>
        My Practice and Learning Projects
      </Heading>
      <Divider />
      <Paragraph style={{marginTop: "12px"}}>
        These are minor projects I work on to practice my skills and for fun! I keep them here so that I can always come back to them whenever needed...
      </Paragraph>
      <Section delay={0.1}>
        <SimpleGrid mt={10} columns={[1,2,3]} gap={6}>
          <GridItemPractice title="NextJS To-Do List" thumbnail={todolist} href="/practice-projects/to-do-list"/>
          <GridItemPractice title="Infinite Add 4" thumbnail={add4} href="/practice-projects/add4"/>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Practice;