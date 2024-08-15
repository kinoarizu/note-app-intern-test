"use client";

import DetailHeader from "@/components/DetailHeader";
import { CREATE_NOTE } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GET_NOTES } from "@/graphql/queries";
import client from "@/config/apollo_client";

export default function NewNote() {
  const router = useRouter();
  const [createNote, {loading }] = useMutation(CREATE_NOTE);

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

  return (
    <>
      <DetailHeader title="Catatan Baru" />
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
          placeholder="Detail Catatan"
          size="lg"
          marginBottom={6}
          value={newNote.body}
          onChange={handleChange}
        />
        <Button
          size="lg"
          width="100%"
          colorScheme="blue"
          isLoading={loading}
          onClick={async () => {
            await createNote({
              variables: {
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
