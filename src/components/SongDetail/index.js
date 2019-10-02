import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { graphql } from 'react-apollo';
import { fetchSong } from '../../queries/song';
import { Text, Box, Icon } from "@chakra-ui/core";

class SongDetail extends Component {
  render () {
    const { data } = this.props;
    console.log(this.props)
    return (
      <Fragment>
        <Link to="/" style={{ marginBottom: 20, display: 'block' }}>
          <Icon name="arrow-back" size="24px" /> Back
        </Link>
        <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
          <Text fontSize="xl">Song Title</Text>
          <span>title</span>
        </Box>
      </Fragment>
    )
  }
}

export default graphql(fetchSong, {
  options: ({ id }) => {
   return {
     variables: { id }
    }
  }
})(SongDetail);