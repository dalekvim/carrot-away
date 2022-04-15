import { Formik } from "formik";
import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import { Searchbar } from "../components/Searchbar";
import { useCreateRecListMutation } from "../generated/graphql";

export const RecListCreate: React.FC = () => {
  const [createRecList] = useCreateRecListMutation();
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Create RecList</h1>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async ({ search }, { setSubmitting }) => {
          try {
            await createRecList({
              variables: { title: search },
            });
            navigate("/");
          } catch (err) {
            console.log(err);
            // TODO: Create alert.
          }
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Searchbar
            values={values}
            handleChange={(event: React.ChangeEvent<any>) => {
              handleChange(event);
            }}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            placeholder="What do you want to call your list?"
            buttonText="Create"
          />
        )}
      </Formik>
    </Container>
  );
};
