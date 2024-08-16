import { ApolloClient, InMemoryCache } from "@apollo/client";

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export default new ApolloClient({
  uri: origin + "/api/graphql",
  cache: new InMemoryCache(),
});
