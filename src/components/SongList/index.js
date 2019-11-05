import React, { Fragment, useState } from 'react';
import { Link } from '@reach/router';
import { map } from 'lodash';
import { List, ListItem, Box, Button, Flex, Icon, Spinner } from "@chakra-ui/core";
import { Loading } from '../loading';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { fetchSongs, deleteSong } from '../../queries/song';

const renderList = ({ songs }, onDeleteSong, setLoading, isRemoving ) => {
  return map(songs, ({ id, title }) => {
    return (
      <ListItem key={id}>
        <Flex justify="space-between">
          <Link to={`/song-detail/${id}`}>
            <span>
              {title}
            </span>
          </Link>
          <Button
            onClick={() => {
              setLoading(id)
              return onDeleteSong(
              {variables: { id }
              }).then(() => {
                setLoading('');
              })
            }}
            border="none"
            variantColor="white"
            style={{ cursor: 'pointer' }}>
            { isRemoving === id
              ? <Spinner color="#319795" />
              : <Icon name="delete" size="17px" color="rgb(229, 62, 62)" /> }
          </Button>
        </Flex>
      </ListItem>
    )
  })
}

const SongList = () => {
  const { loading, data } = useSubscription(fetchSongs);
  const [ onDeleteSong ] = useMutation(deleteSong);
  const [ isRemoving, setLoading ] = useState('');

  if (loading) { return <Loading /> }
  return (
    <Fragment>
      <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
        <List spacing={5}>
          { renderList(data, onDeleteSong, setLoading, isRemoving) }
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
