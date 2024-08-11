"use client";

import NoteCard from "@/components/NoteCard";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
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

export default function Home() {
  const isEmpty: boolean = false;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Center>
          <Text fontSize="4xl" fontWeight="700">
            Daftar Catatan
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Link href="/new">
            <Button
              leftIcon={<AddIcon />}
              paddingInline={8}
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
      {isEmpty ? (
        <Center>
          <Text marginBlock={48} textColor="grey" fontSize="2xl">
            Tidak Ada Catatan
          </Text>
        </Center>
      ) : (
        <Box marginTop={12} marginBottom={12}>
          <SimpleGrid columns={2} spacing={8}>
            {[...Array(10)].map((_, idx) => (
              <NoteCard
                key={idx}
                id={idx}
                title="View a summary of all your customers"
                detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac sagittis est. Etiam aliquet gravida viverra."
                onDeleteClick={onOpen}
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
                  <b>'View a summary of all your customers'</b> akan dihapus!
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Hapus
                </Button>
                <Button variant="ghost">Batalkan</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </>
  );
}
