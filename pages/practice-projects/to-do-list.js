import { Box, Text, Center, List, ListItem, Button, Input, Heading, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import Layout from '../../components/layouts/article';

const ToDoList = () => {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => setUserInput(e.target.value);
  const handleSubmit = (e) => {
    if(userInput == '') {
      return;
    }
    e.preventDefault()

    setList([
      userInput,
      ...list
    ]);

    setUserInput('')
  }

  const handleDelete = (itemToDelete) => {
    const updatedArr = list.filter(item => list.indexOf(item) != list.indexOf(itemToDelete))

    setList(updatedArr);
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <Layout>
      <Heading as="h1" mt={4} mb={8}>
        Next JS To-Do List
      </Heading>
      <List style={{alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        {
          list.length >= 1 ? list.map((todoItem, idx) => {
            return <ListItem 
              style={{
                display: 'flex',
                width: "50%",
                justifyContent: 'space-between',
                borderRadius: "5.9px"}}
                m={6}
                key={idx}>
              <Text noOfLines={1} p={2}>{todoItem}</Text><Button ml={8} onClick={(e) => {
                e.preventDefault()
                handleDelete(todoItem)
              }}><DeleteIcon color="red" /></Button>
            </ListItem>
          })
          : <Text>Your to-do list is empty!</Text>
        }
      </List>
      <FormControl>
        <FormLabel mt={4} textAlign="center"></FormLabel>
          <Input
          placeholder='Enter an item to add...'
          value={userInput}
          bg={useColorModeValue('#ffffff40', 'gray200')}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          />
          <Center>
            <Button mt={4} onClick={handleSubmit}>Add Item</Button>
          </Center>
      </FormControl>
      <Text mt={24}>Features to Add:</Text>
      <List>
        <ListItem>
          - MetaMask admin so that only myself and trusted addresses can add items
        </ListItem>
        <ListItem>
          - Proper spacing between item container and contents [x]
        </ListItem>
        <ListItem>
          - Edit button on individual items
        </ListItem>
        <ListItem>
          - Persistence! Local db.
        </ListItem>        
      </List>
    </Layout>
  )
}

export default ToDoList;