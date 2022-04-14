import {
  LazyQueryResult,
  OperationVariables,
  QueryLazyOptions,
} from "@apollo/client";
import React from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  values: {
    search: string;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  isSubmitting: boolean;
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
