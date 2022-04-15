import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";
import { AuthForm } from "../components/AuthForm";
import { useLoginMutation } from "../generated/graphql";

export const LoginScreen: React.FC = observer(() => {
  const [login] = useLoginMutation();
  const authStore = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container className="pt-3">
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          let response: any;
          try {
            response = await login({
              variables: { email, password },
            });
            authStore.setAccessToken(response.data.login.accessToken);
            navigate("/");
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
});
