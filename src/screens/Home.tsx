import { useLazyQuery } from "@apollo/client";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "..";
import { LoadingError } from "../components/LoadingError";
import { Searchbar } from "../components/Searchbar";
import { SEARCH_REC_LISTS } from "../constants/queries";

export const HomeScreen: React.FC = observer(() => {
  const authStore = React.useContext(AuthContext);

  const [searchRecLists, { loading, error, data }] =
    useLazyQuery(SEARCH_REC_LISTS);

  return (
    <div>
      <Container className="pt-3 pb-3">
        <>{authStore.accessToken}</>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={(_, { setSubmitting }) => {
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
                <Link key={recList._id} to={`/rec-list/${recList._id}`}>
                  <ListGroup.Item as="li">{recList.title}</ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          ) : null}
        </LoadingError>
      </Container>
    </div>
  );
});
