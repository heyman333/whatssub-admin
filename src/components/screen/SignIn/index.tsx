import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { getString } from '../../../../STRINGS';
import { Formik } from 'formik';
import SignInForm from './form';

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

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
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
        component={(props) => <SignInForm {...props} />}
      />
    </Container>
  );
}

export default SignIn;
