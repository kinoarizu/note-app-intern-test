"use client";

import DetailHeader from "@/components/DetailHeader";
import { UPDATE_NOTE } from "@/graphql/mutations";
import { GET_NOTE, GET_NOTES } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import client from "@/config/apollo_client";

export default function EditNote() {
  const router = useRouter();
  const param = useParams();

  const [updateNote, { loading: loadingMutation }] = useMutation(UPDATE_NOTE);
  const { loading: loadingQuery } = useQuery(GET_NOTE, {
    variables: { id: param.id },
    onCompleted: (data) =>
      setNewNote({
        title: data.note.title,
        body: data.note.body,
      }),
  });

  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loadingQuery)
    return (
      <Center>
        <CircularProgress marginBlock={240} isIndeterminate size="100px" />
      </Center>
    );

  return (
    <>
      <DetailHeader title="Ubah Catatan" />
      <Box marginBlock={8}>
        <Input
          name="title"
          size="lg"
          marginBottom={6}
          placeholder="Judul Catatan"
          value={newNote.title}
          onChange={handleChange}
        />
        <Textarea
          name="body"
          size="lg"
          marginBottom={6}
          placeholder="Detail Catatan"
          value={newNote.body}
          onChange={handleChange}
        />
        <Button
          colorScheme="blue"
          size="lg"
          width="100%"
          isLoading={loadingMutation}
          onClick={async () => {
            await updateNote({
              variables: {
                id: param.id,
                title: newNote.title,
                body: newNote.body,
              },
            });
            client.refetchQueries({
              include: [GET_NOTES],
            });
            router.back();
          }}
        >
          Simpan
        </Button>
      </Box>
    </>
  );
}
