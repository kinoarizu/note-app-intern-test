"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Center, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface DetailHeaderParams {
  title: string;
}

export default function DetailHeader({ title }: DetailHeaderParams) {
  const router = useRouter();

  return (
    <Flex>
      <Center>
        <ArrowBackIcon
          boxSize={10}
          marginRight={8}
          onClick={() => router.back()}
          cursor="pointer"
        />
      </Center>
      <Text fontSize="4xl" as="b">
        {title}
      </Text>
    </Flex>
  );
}
