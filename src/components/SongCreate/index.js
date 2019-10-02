import React, { Component } from 'react';
import { withFormik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Button
} from "@chakra-ui/core";

class SongCreate extends Component {
  render () {
    const {
      handleSubmit,
      values,
      handleChange,
      handleBlur
     } = this.props;

    return (
      <Flex justify="center">
        <Box w="60%" p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">New song</FormLabel>
            <Input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="title"
              type="text"
              placeholder="Type the title"
            />
            <br />
            <Button
              type="submit"
              variantColor="green"
            >
              Add
            </Button>
          </FormControl>
        </form>
        </Box>
      </Flex>
    )
  }
}

const SongCreateEnhanced = withFormik({
  mapPropsToValues: () => ({
    title: ''
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);
    console.log(values, 'values')
  },
})(SongCreate);

export default SongCreateEnhanced;