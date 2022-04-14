import React from "react";
import { Button, Form } from "react-bootstrap";
import { FormikProps } from "../types/formTypes";

interface Props extends FormikProps {
  values: {
    email: string;
    password: string;
  };
}

export const AuthForm: React.FC<Props> = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};
