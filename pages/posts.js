import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import bitcoin from '../public/images/bitcoin.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading mt={4} as="h4" fontSize={20} mb={4}>
        My Posts - Under Development!
      </Heading>
      <Divider mb={4} />
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <GridItem title="Why I'm In Crypto" thumbnail={bitcoin} />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
