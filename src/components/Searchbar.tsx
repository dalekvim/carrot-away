import {
  LazyQueryResult,
  OperationVariables,
  QueryLazyOptions,
} from "@apollo/client";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { FormikProps } from "../types/formTypes";

interface Props extends FormikProps {
  values: {
    search: string;
  };
  searchRecLists: (
    options?: QueryLazyOptions<OperationVariables> | undefined
  ) => Promise<LazyQueryResult<any, OperationVariables>>;
}

export const Searchbar: React.FC<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  searchRecLists,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="search"
        name="search"
        onChange={(event) => {
          handleChange(event);
          searchRecLists({
            variables: { title: event.target.value },
          });
        }}
        onBlur={handleBlur}
        value={values.search}
        placeholder="An anime where..."
        className="me-2"
        aria-label="Search"
        autoComplete="off"
      />
      <Button type="submit" variant="outline-success" disabled={isSubmitting}>
        Search
      </Button>
    </Form>
  );
};
