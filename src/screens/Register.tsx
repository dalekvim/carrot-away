import { Formik } from "formik";
import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";
import { useRegisterMutation } from "../generated/graphql";

export const RegisterScreen: React.FC = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  return (
    <Container className="pt-3">
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          let response: any;
          try {
            response = await register({
              variables: { email, password },
            });
            if (!response.data.register) {
              // TODO: Create alert.
            } else {
              navigate("/login");
            }
          } catch {
            // TODO: Create alert.
          }
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <AuthForm
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </Container>
  );
};
