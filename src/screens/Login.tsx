import { Formik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export const LoginScreen: React.FC = () => {
  return (
    <Container className="pt-3">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
        )}
      </Formik>
    </Container>
  );
};
