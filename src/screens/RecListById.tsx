import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "..";
import { LoadingError } from "../components/LoadingError";
import { Searchbar } from "../components/Searchbar";
import {
  useAddAnimeMutation,
  useDeleteAnimeMutation,
  useMeQuery,
  useRecListQuery,
} from "../generated/graphql";

export const RecList: React.FC = observer(() => {
  const params = useParams();
  const { loading, error, data, refetch } = useRecListQuery({
    variables: { recListId: params.recListId! },
  });
  const [isDelete, setDelete] = React.useState(false);
  const me = useMeQuery();
  const [addAnime] = useAddAnimeMutation();
  const [deleteAnime] = useDeleteAnimeMutation();
  const authStore = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <LoadingError loading={loading} error={error}>
      {data && data.recList ? (
        <>
          <Container className="pb-2">
            <h2>{data.recList.title}</h2>
            <p>By {data.recList.createdBy.email}</p>
            {!me.loading &&
            !me.error &&
            me.data &&
            !authStore.getHasExpired() ? (
              data.recList.createdBy._id === me.data.me._id ? (
                <>
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
                  <Button
                    className="mt-3 mb-1"
                    onClick={() => setDelete((curDelete) => !curDelete)}
                    variant={isDelete ? "danger" : "secondary"}
                  >
                    {isDelete ? "Delete" : "View"}
                  </Button>
                </>
              ) : null
            ) : null}
          </Container>
          <ListGroup>
            {data.recList.anime
              .filter((_, index) => index % 2 === 0)
              .map((_, index) => (
                <Row key={index}>
                  <Col>
                    <Button
                      variant="white"
                      onClick={async () => {
                        if (isDelete) {
                          await deleteAnime({
                            variables: {
                              malId: parseInt(
                                data.recList.anime[2 * index].malId
                              ),
                              recListId: data.recList._id,
                            },
                          });
                          refetch();
                        } else {
                          navigate(
                            `/anime/${data.recList.anime[2 * index].malId}`
                          );
                        }
                      }}
                    >
                      <Image
                        src={data.recList.anime[2 * index].image}
                        fluid
                        rounded
                      />
                    </Button>
                  </Col>
                  <Col>
                    {2 * index + 1 < data.recList.anime.length ? (
                      <Button
                        variant="white"
                        onClick={async () => {
                          if (isDelete) {
                            await deleteAnime({
                              variables: {
                                malId: parseInt(
                                  data.recList.anime[2 * index + 1].malId
                                ),
                                recListId: data.recList._id,
                              },
                            });
                            refetch();
                          } else {
                            navigate(
                              `/anime/${
                                data.recList.anime[2 * index + 1].malId
                              }`
                            );
                          }
                        }}
                      >
                        <Image
                          src={data.recList.anime[2 * index + 1].image}
                          fluid
                          rounded
                        />
                      </Button>
                    ) : null}
                  </Col>
                </Row>
              ))}
          </ListGroup>
        </>
      ) : (
        <></>
      )}
    </LoadingError>
  );
});
