import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/project'

const Project = () => {
  return (
    <Layout title="NFT Museum">
      <Container>
        <Title>My Personal Collection of NFTs and Crypto Fine Art</Title>
        <P>
          I enjoy spending adult money on NFTs and crypto art. My goal is to
          build up a museum-grade collection as I walk through life. See my
          collection below... 👇
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://my-nft-museum.vercel.app/" ml="4px">
              <b>https://my-nft-museum.vercel.app/</b>{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
