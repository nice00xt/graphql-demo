import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
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
          <Link to="create-song">
            <Button variantColor="teal" variant="link" border="none">Add new</Button>
          </Link>
        </Flex>
      </Fragment>
    )
  }
}

export default SongList;