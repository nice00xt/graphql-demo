import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { Text, Box, Icon } from "@chakra-ui/core";

class SongDetail extends Component {
  render () {
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

export default SongDetail;