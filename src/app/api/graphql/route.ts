import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({ resolvers, typeDefs, csrfPrevention: false });

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
