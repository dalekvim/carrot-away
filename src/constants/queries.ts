import { gql } from "@apollo/client";

export const SEARCH_REC_LISTS = gql`
  query SearchRecList($title: String!) {
    searchRecList(title: $title) {
      _id
      title
    }
  }
`;

export const REC_LIST_BY_ID = gql`
  query RecList($recListId: String!) {
    recList(recListId: $recListId) {
      title
      createdBy {
        _id
        email
      }
      anime {
        malId
        image
      }
    }
  }
`;
