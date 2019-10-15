import React, { Fragment } from 'react';
import { Link } from '@reach/router';
// import { map } from 'lodash';
import { List, ListItem, Box, Button, Flex, Icon } from "@chakra-ui/core";

export const SongList = () => {
  const renderList = () => {
    return (
      <ListItem>
        <Flex justify="space-between">
          <Link to="/song-detail/1">
            <span>
              List name
            </span>
          </Link>
          <Icon name="delete" size="17px" color="rgb(229, 62, 62)"/>
        </Flex>
      </ListItem>
    )
  }

  return (
    <Fragment>
      <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
        <List spacing={5}>
          {renderList()}
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

export default SongList;