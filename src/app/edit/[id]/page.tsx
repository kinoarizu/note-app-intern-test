"use client";

import DetailHeader from "@/components/DetailHeader";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function EditNote() {
  const router = useRouter();

  return (
    <>
      <DetailHeader title="Ubah Catatan" />
      <Box marginBlock={8}>
        <Input
          size="lg"
          marginBottom={6}
          placeholder="Judul Catatan"
          value="Contoh Judul"
        />
        <Textarea
          size="lg"
          marginBottom={6}
          placeholder="Detail Catatan"
          value="Contoh Detail"
        />
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
