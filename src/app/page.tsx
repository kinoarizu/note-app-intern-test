"use client";

import NoteCard from "@/components/NoteCard";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_NOTES } from "@/graphql/queries";
import { Note } from "@/types/Note";
import { DELETE_NOTE } from "@/graphql/mutations";
import { useState } from "react";
import client from "@/config/apollo_client";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, data } = useQuery(GET_NOTES);
  const [deleteNote] = useMutation(DELETE_NOTE);

  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
  });

  if (loading)
    return (
      <Center>
        <CircularProgress marginBlock={240} isIndeterminate size="100px" />
      </Center>
    );

  return (
    <>
      <Flex>
        <Center>
          <Text fontSize="3xl" fontWeight="700">
            Daftar Catatan
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Link href="/new">
            <Button
              leftIcon={<AddIcon />}
              paddingInline={6}
              paddingBlock={6}
              borderRadius="100"
              fontSize="lg"
              colorScheme="blue"
              variant="solid"
            >
              Tambah
            </Button>
          </Link>
        </Center>
      </Flex>

      {/* EMPTY STATE */}
      {data.notes.length === 0 ? (
        <Center>
          <Text marginBlock={48} textColor="grey" fontSize="2xl">
            Tidak Ada Catatan
          </Text>
        </Center>
      ) : (
        <Box marginTop={12} marginBottom={12}>
          <SimpleGrid columns={2} spacing={8}>
            {data.notes.map(({ id, title, body, createdAt }: Note) => (
              <NoteCard
                key={id}
                id={id}
                title={title}
                detail={body}
                createdAt={createdAt}
                onDeleteClick={() => {
                  onOpen();
                  setSelectedNote({ id, title });
                }}
              />
            ))}
          </SimpleGrid>
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Hapus Catatan</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text mb="1rem">
                  Apakah ingin menghapus catatan{" "}
                  <b>&apos;{selectedNote.title}&apos;</b> akan dihapus!
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="red"
                  mr={3}
                  onClick={async () => {
                    await deleteNote({
                      variables: {
                        id: selectedNote.id,
                      },
                    });
                    setSelectedNote({ id: "", title: "" });
                    client.refetchQueries({
                      include: [GET_NOTES],
                    });
                    onClose();
                  }}
                >
                  Hapus
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Batalkan
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </>
  );
}
