import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "..";
import { LoadingError } from "../components/LoadingError";
import { Searchbar } from "../components/Searchbar";
import { useSearchRecListLazyQuery } from "../generated/graphql";

export const HomeScreen: React.FC = observer(() => {
  const authStore = React.useContext(AuthContext);

  const [searchRecLists, { loading, error, data }] =
    useSearchRecListLazyQuery();

  const timeTilExpireInMinutes = Math.floor(authStore.getTimeTilExpire() / 60);

  return (
    <div>
      <Container className="pt-3 pb-3">
        {timeTilExpireInMinutes === 0 ? (
          <p>
            Your session is about to end. Want to{" "}
            <Link to="/login">login in again?</Link>
          </p>
        ) : timeTilExpireInMinutes > 0 ? (
          <p>{`Your session will end in ${timeTilExpireInMinutes} minutes.`}</p>
        ) : null}
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
              handleChange={(event: React.ChangeEvent<any>) => {
                handleChange(event);
                searchRecLists({
                  variables: { title: event.target.value },
                });
              }}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              placeholder="An anime where..."
              buttonText="Search"
            />
          )}
        </Formik>
      </Container>
      <Container>
        <LoadingError loading={loading} error={error}>
          {data && data.searchRecList ? (
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
