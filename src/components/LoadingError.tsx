import { ApolloError } from "@apollo/client";
import React from "react";

interface Props {
  loading: boolean;
  error: ApolloError | undefined;
  children: React.ReactNode;
}

export const LoadingError: React.FC<Props> = ({ loading, error, children }) => {
  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error.graphQLErrors[0].message}</p>
  ) : (
    <div>{children}</div>
  );
};
