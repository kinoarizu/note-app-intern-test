"use client";

import { Box, ColorModeScript, Text } from "@chakra-ui/react";
import { Providers } from "./providers";
import theme from "@/config/theme";
import client from "@/config/apollo_client";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Note App</title>
      <link rel="icon" href="/next.svg" />
      <body>
        <ApolloProvider client={client}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Providers>
            <Box
              backgroundColor="green.400"
              width="auto"
              paddingBlock={5}
              paddingInline={48}
            >
              <Text fontSize="3xl" as="b" color="white">
                Note App
              </Text>
            </Box>
            <Box marginBlock={8} marginInline={48}>
              {children}
            </Box>
          </Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}
