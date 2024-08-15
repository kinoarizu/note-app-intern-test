import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
  mutation Mutation($title: String, $body: String) {
    createNote(title: $title, body: $body) {
      id
      title
      body
      createdAt
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation Mutation($id: String, $title: String, $body: String) {
    updateNote(id: $id, title: $title, body: $body) {
      id
      title
      body
      createdAt
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation Mutation($id: ID!) {
    deleteNote(id: $id)
  }
`;
