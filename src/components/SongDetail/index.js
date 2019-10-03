import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { fetchSong } from '../../queries/song';
import { Text, Box, Icon } from "@chakra-ui/core";
import { useQuery } from '@apollo/react-hooks';

const SongDetail = ({ id }) => {
  const { loading, data } = useQuery(fetchSong, {
    variables: { id }
  })

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <Fragment>
      <Link to="/" style={{ marginBottom: 20, display: 'block' }}>
        <Icon name="arrow-back" size="24px" /> Back
      </Link>
      <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
        <Text fontSize="xl">Song detail</Text>
        <strong>{ data.song.title }</strong>
      </Box>
    </Fragment>
  )
}

export default SongDetail;