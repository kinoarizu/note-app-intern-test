import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "https://note-app-intern-test.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});
