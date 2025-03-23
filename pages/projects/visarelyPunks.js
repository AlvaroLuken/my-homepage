import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/project'

const Project = () => {
  return (
    <Layout title="Visarely Punks">
      <Container>
        <Title>My Own NFT Collection</Title>
        <P>
          As a seasoned NFT collector, I always wanted to call myself a collection OWNER. So I took 2 weeks of hardcore development and created Visarely Punks! See my
          collection below... 👇
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://visarelypunks.fun/" ml="4px">
              <b>https://visarelypunks.fun/</b>{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
