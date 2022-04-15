import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { AuthContext } from "..";
import { LoadingError } from "../components/LoadingError";
import { Searchbar } from "../components/Searchbar";
import {
  useAddAnimeMutation,
  useMeQuery,
  useRecListQuery,
} from "../generated/graphql";

export const RecList: React.FC = observer(() => {
  const params = useParams();
  const { loading, error, data, refetch } = useRecListQuery({
    variables: { recListId: params.recListId! },
  });
  const me = useMeQuery();
  const [addAnime] = useAddAnimeMutation();
  const authStore = React.useContext(AuthContext);

  return (
    <LoadingError loading={loading} error={error}>
      {data && data.recList ? (
        <div>
          <Container className="pb-2">
            <h2>{data.recList.title}</h2>
            <p>By {data.recList.createdBy.email}</p>
            {!me.loading &&
            !me.error &&
            me.data &&
            !authStore.getHasExpired() ? (
              data.recList.createdBy._id === me.data.me._id ? (
                <Formik
                  initialValues={{ search: "" }}
                  onSubmit={async ({ search }, { setSubmitting }) => {
                    try {
                      await addAnime({
                        variables: {
                          malId: parseInt(search),
                          recListId: data.recList._id,
                        },
                      });
                      refetch();
                    } catch (err) {
                      // TODO: Add alert.
                    }
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
                      placeholder="Enter mal id"
                      buttonText="Add"
                    />
                  )}
                </Formik>
              ) : null
            ) : null}
          </Container>
          <Container>
            <ListGroup>
              {data.recList.anime
                .filter((_, index) => index % 2 === 0)
                .map((_, index) => (
                  <Row key={index}>
                    <Col className="p-1">
                      <Image
                        src={data.recList.anime[2 * index].image}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col className="p-1">
                      {2 * index + 1 < data.recList.anime.length ? (
                        <Image
                          src={data.recList.anime[2 * index + 1].image}
                          fluid
                          rounded
                        />
                      ) : null}
                    </Col>
                  </Row>
                ))}
            </ListGroup>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </LoadingError>
  );
});
