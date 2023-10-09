import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import nftMuseumPreview from '../public/images/nft_museum_preview.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading mt={4} as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <Divider mb={4} />
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="nftMuseum"
              title="NFT Museum"
              thumbnail={nftMuseumPreview}
            >
              My Personal Art Collection
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        {/* <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Old Works
          </Heading>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Projects
