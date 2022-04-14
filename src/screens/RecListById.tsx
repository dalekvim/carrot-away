import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { LoadingError } from "../components/LoadingError";
import { REC_LIST_BY_ID } from "../constants/queries";

export const RecList: React.FC = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(REC_LIST_BY_ID, {
    variables: { recListId: params.recListId },
  });
  return (
    <LoadingError loading={loading} error={error}>
      {data ? (
        <div>
          <h2>{data.recList.title}</h2>
          <p>By {data.recList.createdBy.email}</p>
        </div>
      ) : (
        <></>
      )}
    </LoadingError>
  );
};
