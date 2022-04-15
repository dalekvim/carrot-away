import React from "react";
import { Button, Form } from "react-bootstrap";
import { FormikProps } from "../types/formTypes";

interface Props extends FormikProps {
  values: {
    search: string;
  };
  placeholder: string;
  buttonText: string;
}

export const Searchbar: React.FC<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  placeholder,
  buttonText,
}) => {
  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="search"
        name="search"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.search}
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
        autoComplete="off"
      />
      <Button type="submit" variant="outline-success" disabled={isSubmitting}>
        {buttonText}
      </Button>
    </Form>
  );
};
