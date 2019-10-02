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
  AlertIcon,
  Icon
} from "@chakra-ui/core";

class SongCreate extends Component {
  state = {
    alertSuccess: false
  }

  renderAlert() {
    return (
      <Alert status="success">
        <AlertIcon />
        New song created
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
    const { alertSuccess } = this.state;

    return (
      <Flex justify="center">
        <Box w="60%" p={4}>
        <Link to="/" style={{ marginBottom: 15, display: 'block' }}>
          <Icon name="arrow-back" size="24px" /> Back
        </Link>
        { alertSuccess && this.renderAlert() }
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