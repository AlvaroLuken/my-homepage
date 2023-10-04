import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Icon, Image, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={2} mb={6} align="center">
          Hello, I&apos;m a software developer based in San Francisco! 👋
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-tiel">
              Alvaro Luken
            </Heading>
            <p>Bitcoin, Ethereum and everything in between.</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/al_headshot.jpeg" alt="Profile Image" />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Paragraph>
            Al currently works at {' '} 
            <Link href="https://www.alchemy.com/">
              Alchemy
            </Link>, spearheading crypto education at <Link href="https://www.alchemy.com/university">Alchemy University</Link>. In his personal time, you can find him building apps on the Bitcoin Lightning Network. When he is not coding, he is probably watching a movie or sparring jiu-jitsu.
          </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
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
            <BioYear>
              2020
            </BioYear>
            Graduated from New York University with a Bachelor&apos;s in Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>
              2020
            </BioYear>
            Worked months on a GM car assembly line in Wentzville, Missouri.
          </BioSection>
          <BioSection>
            <BioYear>
              2021-present
            </BioYear>
            Taught smart contract development as the lead instructor of ChainShot&apos;s Ethereum developer bootcamp.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            {' '} 
            <Link href="https://my-nft-museum.vercel.app/">
            NFTs and Collecting Art
            </Link> 🎨, 3D Printing, Playing (Bass, Guitar and Piano) 🎹, Carnivore Diets 🥩, Movies 🎥, Jiu-Jitsu 🥋, Basketball 🏀
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
          <ListItem>
              <Link href="https://twitter.com/lifeofbitcoin" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @lifeofbitcoin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/AlvaroLuken" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @AlvaroLuken
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin/in/alvaro-luken/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
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