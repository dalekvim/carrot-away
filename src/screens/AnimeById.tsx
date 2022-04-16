import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { LoadingError } from "../components/LoadingError";
import { useAnimeByIdQuery } from "../generated/graphql";

export const Anime: React.FC = () => {
  const params = useParams();
  const { data, loading, error } = useAnimeByIdQuery({
    variables: { malId: parseInt(params.malId!) },
  });

  return (
    <LoadingError loading={loading} error={error}>
      {data ? (
        <>
          <Container style={{ textAlign: "center" }}>
            <h1>{data.animeById.title}</h1>
            <Image
              className="pb-2"
              src={data.animeById.image}
              style={{ width: "50%" }}
            />
          </Container>
          <p style={{ textAlign: "justify" }}>{data.animeById.synopsis}</p>
        </>
      ) : null}
    </LoadingError>
  );
};
