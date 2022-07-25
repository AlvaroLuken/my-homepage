import { Box, Text, Center, List, ListItem, Button, Input, Heading, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

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
    <Box>
      <Heading as="h1" mt={4} mb={8}>
        Next JS To-Do List
      </Heading>
      <List align="center">
        {
          list.length >= 1 ? list.map((todoItem, idx) => {
            return <ListItem m={6} key={idx}>
              {todoItem}<Button ml={8} onClick={(e) => {
                e.preventDefault()
                handleDelete(todoItem)
              }}><DeleteIcon color="red" /></Button>
            </ListItem>
          })
          : <Text>Your to-do list is empty!</Text>
        }
      </List>
      <FormControl>
        <FormLabel mt={4} textAlign="center">Add Item To List</FormLabel>
          <Input
          placeholder='Enter your to-do...'
          value={userInput}
          bg={useColorModeValue('#ffffff40', 'gray200')}
          borderColor={'gray200'}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          />
          <Center>
            <Button text-align="center" mt={4} onClick={handleSubmit}>Add Item</Button>
          </Center>
      </FormControl>
      <Text>Features to Add:</Text>
      <List>
        <ListItem>
          - MetaMask admin so that only myself and trusted addresses can add items
        </ListItem>
        <ListItem>
          - Proper spacing between item container and contents
        </ListItem>
        <ListItem>
          - Edit button on individual items
        </ListItem>
        <ListItem>
          - Persistence! Local db.
        </ListItem>        
      </List>
    </Box>
  )
}

export default ToDoList;