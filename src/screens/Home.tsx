import { gql, useLazyQuery } from "@apollo/client";
import { Formik } from "formik";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { LoadingError } from "../components/LoadingError";
import { Searchbar } from "../components/Searchbar";

const SEARCH_REC_LISTS = gql`
  query SearchRecList($title: String!) {
    searchRecList(title: $title) {
      _id
      title
    }
  }
`;

export const HomeScreen: React.FC = () => {
  const [searchRecLists, { loading, error, data }] =
    useLazyQuery(SEARCH_REC_LISTS);

  return (
    <div>
      <Container className="pt-3 pb-3">
        <Formik
          initialValues={{ search: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Searchbar
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              searchRecLists={searchRecLists}
            />
          )}
        </Formik>
      </Container>
      <Container>
        <LoadingError loading={loading} error={error}>
          {data ? (
            <ListGroup as="ul">
              {data.searchRecList.map((recList: any) => (
                <ListGroup.Item key={recList._id} as="li">
                  {recList.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : null}
        </LoadingError>
      </Container>
    </div>
  );
};
