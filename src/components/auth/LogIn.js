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
} from "@chakra-ui/core";
import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string().required('required'),
  password: Yup.string().required('required')
});

const LogInForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validations}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
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
           <h4>Login</h4>
           <FormLabel>Email</FormLabel>
           <Input
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             name="email"
             type="text"
             placeholder="Type your email"
           />
           <br />
           <FormLabel>Password</FormLabel>
           <Input
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             name="password"
             type="password"
             placeholder="Type your password"
           />
           <br />
           <Button
             type="submit"
             variantColor="green"
             isLoading={isSubmitting}
             disabled={isSubmitting}
             loadingText="Login"
           >
             Login
           </Button>
         </FormControl>
       </form>
      )}
    </Formik>
  )
}

const LogIn = () => {
  return (
    <Flex justify="center">
      <Box w="60%" p={4}>
      <br />
      { LogInForm() }
      </Box>
    </Flex>
  )
}

export default LogIn;