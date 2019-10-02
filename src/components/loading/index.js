import React from 'react';
import { Box, Flex, Spinner } from "@chakra-ui/core";

export const Loading = () => {
  return (
    <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
      <Flex justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="lg"
        />
      </Flex>
    </Box>
  )
}
