import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { map } from 'lodash';
import { List, ListItem, Box, Button, Flex, Icon } from "@chakra-ui/core";
import { Loading } from '../loading';
import { fetchSongs } from '../../queries/song';
import { useQuery } from '@apollo/react-hooks';

const renderList = (songs) => {
  return map(songs, ({ id, title }) => {
    return (
      <ListItem key={id}>
        <Flex justify="space-between">
          <Link to={`/song-detail/${id}`}>
            <span>
              {title}
            </span>
          </Link>
          <Icon name="delete" size="17px" color="rgb(229, 62, 62)" />
        </Flex>
      </ListItem>
    )
  })
}

const SongList = () => {
  const { loading, data } = useQuery(fetchSongs);
  if (loading) { return <Loading /> }
  return (
    <Fragment>
      <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
        <List spacing={5}>
          { renderList(data.songs) }
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

export default SongList
