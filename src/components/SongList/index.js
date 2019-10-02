import React, { Component, Fragment } from 'react';
import { List, ListItem, ListIcon, Box, Button, Flex } from "@chakra-ui/core";

class SongList extends Component {
  render () {
    return (
      <Fragment>
        <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
          <List spacing={5}>
            <ListItem>
              <ListIcon icon="star" color="#77bfff" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </span>
            </ListItem>
          </List>
        </Box>
        <br/>
        <Flex justify="flex-end">
          <Button variantColor="green" >Add new</Button>
        </Flex>
      </Fragment>
    )
  }
}

export default SongList;