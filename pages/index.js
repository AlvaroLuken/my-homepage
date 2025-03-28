import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={2}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a software developer based in San Francisco! 👋
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-tiel">
              Alvaro Luken
            </Heading>
            <p>Bitcoin and smart contracts on the Ethereum computer.</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/al_headshot.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Paragraph>
            Al currently works at{' '}
            <Link href="https://www.alchemy.com/">Alchemy</Link> as a Senior DevRel Engineer, spearheading
            crypto education at{' '}
            <Link href="https://www.alchemy.com/university">
              Alchemy University
            </Link>
            . In his personal time, you can find him looking at NFTs and
            building cool webapps for fun. When he is not coding, he is probably
            watching a movie or researching modern diet trends.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from{' '}
            <Link href="https://www.nyu.edu/">New York University</Link> with a
            Bachelor&apos;s in Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked on <Link href="https://www.gm.com/">GM</Link>&apos;s biggest
            assembly line, directly helping manufacture over 30,000 vehicles.
          </BioSection>
          <BioSection>
            <BioYear>2021-2022</BioYear>
            Taught smart contract development as the lead instructor of
            ChainShot&apos;s Ethereum developer bootcamp.
          </BioSection>
          <BioSection>
            <BioYear>August 2022</BioYear>
            <Link href="https://techcrunch.com/2022/08/25/crypto-developer-infrastructure-alchemy-acquisition-deal-ma-chainshot-coding-bootcamp/">
              ChainShot gets acquired by Alchemy!
            </Link>{' '}
          </BioSection>
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Product/Education/Community Lead @{' '}
            <Link href="https://university.alchemy.com/">
              Alchemy University
            </Link>
            . DevRel / Full Stack Engineer.
          </BioSection>
          <BioSection>
            <BioYear>2023-2024</BioYear>
            Senior Ecosystem Growth Manager @{' '}
            <Link href="https://circle.com/">
              Circle
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2024-current</BioYear>
            Senior DevRel Engineer @{' '}
            <Link href="https://alchemy.com/">
              Alchemy
            </Link>
            . After spending a year at Circle, I returned to Alchemy to lead the
            education and developer relations team.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            {' '}
            <Link href="https://my-nft-museum.vercel.app/">
              I am an NFT and fine art collector, check out my personal
              collection here!
            </Link>{' '}
            🎨, 3D Printing, Playing (Bass, Guitar and Piano) 🎹, Carnivore
            Diets 🥩, Movies 🎥, Jiu-Jitsu 🥋, Basketball 🏀
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/lifeofbitcoin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @lifeofbitcoin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/AlvaroLuken" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @AlvaroLuken
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin/in/alvaro-luken/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @AlvaroLuken
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
