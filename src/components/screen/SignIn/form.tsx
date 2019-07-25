import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { getString } from '../../../../STRINGS';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const SignInForm = ({
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
);
export default SignInForm;
