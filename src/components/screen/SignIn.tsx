import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { getString } from '../../../STRINGS';
import { Formik } from 'formik';

// SignIn Page-wide font-size. styles resize proportionally by changing it
const fontSize = `20px`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
  padding: 50px;
  font-size: ${fontSize};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1em;
  margin: 0.5em 0;
`;

const Input = styled.input`
  font-size: 1em;
  width: 15em;
  height: 2em;
  padding: 0.3em;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 0.3em 0.5em;
  font-size: 0.9em;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.7em;
`;

interface IProps {
  history?: any;
  onSubmitSuccess?: () => void // test purpose
}

function SignIn(props: IProps) {
  return (
    <Container>
      <Title>Whatssub Admin</Title>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          let errors: { email?: string, password?: string } = {};

          // email validation
          if (!values.email) {
            errors.email = getString('EMAIL_HINT');
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = getString('EMAIL_ERROR');
          }

          // password validation
          if (!values.password) {
            errors.password = getString('PASSWORD_HINT');
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (props.onSubmitSuccess) {
            props.onSubmitSuccess();
          }

          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label >
                Email:
              <Input
                type="email"
                name="email"
                data-testid="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Label>
            {errors.email && touched.email && <ErrorMessage data-testid='error'>{errors.email}</ErrorMessage>}
            <Label>
                Password:
              <Input
                type="password"
                name="password"
                data-testid="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Label>
            {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            <SubmitButton type="submit" data-testid="submit" disabled={isSubmitting}>
              {getString('LOGIN')}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignIn;
