import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { List, ListItem, Box, Button, Flex, Icon } from "@chakra-ui/core";
import { Loading } from '../loading';

class SongList extends Component {
  renderList() {
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

  render () {
    const loading = false;
    if (loading) {
      return <Loading />
    }

    return (
      <Fragment>
        <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
          <List spacing={5}>
            {this.renderList()}
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