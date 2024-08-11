"use client";

import DetailHeader from "@/components/DetailHeader";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function NewNote() {
  const router = useRouter();

  return (
    <>
      <DetailHeader title="Catatan Baru" />
      <Box marginBlock={8}>
        <Input placeholder="Judul Catatan" size="lg" marginBottom={6} />
        <Textarea placeholder="Detail Catatan" size="lg" marginBottom={6} />
        <Button
          onClick={() => router.back()}
          colorScheme="blue"
          size="lg"
          width="100%"
        >
          Simpan
        </Button>
      </Box>
    </>
  );
}
