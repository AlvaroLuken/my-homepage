import { Box, Button, Input, Heading, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/layouts/article';

const Add4 = () => {
  const [number, setNumber] = React.useState(0);
  const [sum, setSum] = React.useState(0);

  function add4(x) {
    let sum = parseInt(x) + 4;
    setSum(sum);
    setNumber(sum)
    return;
  }

  function handleInput(e) {
    if(isNaN(e.target.value)) {
      alert('Must enter valid numbers!');
      return;
    }

    setNumber(parseInt(e.target.value))
  }

  return (
    <Layout>
      <Heading as="h3" mt={4} mb={2}>Sum 4 Endlessly!</Heading>
      <Input mt={10} mb={4} value={number} onChange={handleInput} />
      <Button onClick={() => add4(number)}>Add 4!</Button>
      <Box textAlign="center" mt={4} fontSize={18}>
        The sum is {sum}.
      </Box>
      <Text mt={24}>Features to Add:</Text>
      <List>
        <ListItem>
          - More math functions (ie: get square root of num)
        </ListItem>
        <ListItem>
          - Crypto functions! (ie: generate your own btc/eth address)
        </ListItem>
        <ListItem>
          - Add a better looking error message for when user inputs bad input
        </ListItem>    
      </List>
    </Layout>
  )
}

export default Add4;