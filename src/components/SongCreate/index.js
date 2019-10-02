import React, { Component } from 'react';
import { withFormik } from 'formik';
import { Link } from '@reach/router';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Button,
  Alert,
  AlertIcon
} from "@chakra-ui/core";

class SongCreate extends Component {
  state = {
    alertStatus: ''
  }

  renderAlert() {
    return (
      <Alert status="success">
        <AlertIcon />
        New song created
        <Link to="/"> - see the list</Link>
      </Alert>
    )
  }

  renderForm () {
    const {
      handleSubmit,
      values,
      handleChange,
      handleBlur,
      isSubmitting
     } = this.props;

    return (
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
            isLoading={isSubmitting}
          >
            Add
          </Button>
        </FormControl>
      </form>
    )
  }

  render () {
    return (
      <Flex justify="center">
        <Box w="60%" p={4}>
        { this.renderAlert() }
        <br />
        { this.renderForm() }
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
  },
})(SongCreate);

export default SongCreateEnhanced;