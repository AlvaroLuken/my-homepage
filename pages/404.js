import NextLink from 'next/link';
import { Box, Heading, Container, Divider, Button, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box align="center">
        <iframe src="https://giphy.com/embed/JUqAx6q2jnQtYvXVB4" width="480" height="327" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-panic-confusion-mr-krabs-meme-JUqAx6q2jnQtYvXVB4"></a></p>
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;