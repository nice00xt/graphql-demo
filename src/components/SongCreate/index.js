import React from 'react';
import { Formik } from 'formik';
import { Link, navigate } from '@reach/router';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Button,
  Icon
} from "@chakra-ui/core";
import { useMutation } from '@apollo/react-hooks';
import { createSong } from '../../queries/song';
import * as Yup from 'yup';

const validations = Yup.object().shape({
  title: Yup.string().required('required')
});

const renderForm = (onCreateSong) => {
  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={validations}
      onSubmit={({ title }, { setSubmitting }) => {
        onCreateSong({
          variables: { title }
        }).then(() => {
          setSubmitting(false)
          navigate("/")
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
           <FormLabel>New song</FormLabel>
           <Input
             value={values.title}
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
             disabled={isSubmitting}
             loadingText="Adding"
           >
             Add
           </Button>
         </FormControl>
       </form>
      )}
    </Formik>
  )
}

const SongCreate = () => {
  const [onCreateSong] = useMutation(createSong)
  return (
    <Flex justify="center">
      <Box w="60%" p={4}>
      <Link to="/" style={{ marginBottom: 15, display: 'block' }}>
        <Icon name="arrow-back" size="24px" /> Back
      </Link>
      <br />
      { renderForm(onCreateSong) }
      </Box>
    </Flex>
  )
}

export default SongCreate;