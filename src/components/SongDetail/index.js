import React, { Fragment, useState } from 'react';
import { Formik } from 'formik';
import { Link } from '@reach/router';
import {
  Text,
  Box,
  Icon,
  FormControl,
  Input,
  Flex,
  Button,
  ButtonGroup
} from "@chakra-ui/core";
import { fetchSong, updateSong } from '../../queries/song';
import { useQuery, useMutation } from '@apollo/react-hooks';
import * as Yup from 'yup';

const validations = Yup.object().shape({
  title: Yup.string().required('required')
});

const renderForm = (onUpdateSong, { title, id }, setShowForm) => {
  return (
    <Formik
      initialValues={{ title }}
      validationSchema={validations}
      onSubmit={({ title }, { setSubmitting }) => {
        onUpdateSong({
          variables: { title, id }
        }).then(() => {
          setSubmitting(false)
          setShowForm(false)
        })
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
       <form onSubmit={handleSubmit}>
         <FormControl>
          <Flex justifyContent="space-between">
            <Input
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              name="title"
              type="text"
              placeholder="Type the title"
              width="50%"
            />
            <ButtonGroup spacing={2}>
              <Button
                variantColor="blue"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                cancel
              </Button>
              <Button
                type="submit"
                variantColor="green"
                isLoading={isSubmitting}
                loadingText="Saving"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </ButtonGroup>
          </Flex>
         </FormControl>
       </form>
      )}
    </Formik>
  )
}

const SongDetail = ({ id }) => {
  const [ showForm, setShowForm ] = useState(false);
  const [onUpdateSong] = useMutation(updateSong)
  const { loading, data } = useQuery(fetchSong, {
    variables: { id }
  })

  if (loading) { return <span>Loading...</span> }

  return (
    <Fragment>
      <Link to="/" style={{ marginBottom: 20, display: 'block' }}>
        <Icon name="arrow-back" size="24px" /> Back
      </Link>
      <Box bg="#fbfbfb" w="95%" p={4} shadow="md">
        <Text fontSize="xl">Song detail</Text>
        { showForm
          ? renderForm(onUpdateSong, data.song, setShowForm)
          : (
            <Flex justifyContent="space-between">
              <strong>{ data.song.title }</strong>
              <Button
                onClick={() => setShowForm(true)}
                variantColor="green"
              >
                Edit
              </Button>
            </Flex>
          )}
      </Box>
    </Fragment>
  )
}

export default SongDetail;