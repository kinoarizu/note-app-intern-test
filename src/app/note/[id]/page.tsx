"use client";

import DetailHeader from "@/components/DetailHeader";
import { GET_NOTE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function DetailNote() {
  const param = useParams();
  const { loading, data } = useQuery(GET_NOTE, {
    variables: { id: param.id },
  });

  if (loading)
    return (
      <Center>
        <CircularProgress marginBlock={240} isIndeterminate size="100px" />
      </Center>
    );

  return (
    <>
      <DetailHeader title="Detail Catatan" />
      <Box marginBlock={8}>
        <Text fontSize="2xl" fontWeight="500" marginBottom={8}>
          {data.note.title}
        </Text>
        <Text fontSize="md" marginBottom={6}>
          {data.note.body}
        </Text>
        <Text fontSize="md" color="#BAA">
          {data.note.createdAt}
        </Text>
      </Box>
    </>
  );
}
