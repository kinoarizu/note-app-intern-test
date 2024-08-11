"use client";

import DetailHeader from "@/components/DetailHeader";
import { Box, Text } from "@chakra-ui/react";

export default function DetailNote() {
  return (
    <>
      <DetailHeader title="Detail Catatan" />
      <Box marginBlock={8}>
        <Text fontSize="2xl" fontWeight="500" marginBottom={8}>
          View a summary of all your customers
        </Text>
        <Text fontSize="md" marginBottom={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text fontSize="md" color="#BAA">
          24 Jan 2024
        </Text>
      </Box>
    </>
  );
}
