import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Card,
  CardBody,
  Center,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";

interface NoteCardParams {
  id: number;
  title: string;
  detail: string;
  onDeleteClick: () => void;
}

export default function NoteCard({
  id,
  title,
  detail,
  onDeleteClick,
}: NoteCardParams) {
  return (
    <Card _hover={{ backgroundColor: "#EEF" }} boxShadow="outline">
      <CardBody>
        <Flex>
          <Center>
            <Link href={"/note/" + id} _hover={{ textDecoration: "none" }}>
              <Flex flexDirection="column">
                <Text marginRight={4} fontSize="md" fontWeight="700">
                  {title}
                </Text>
                <Text
                  marginTop={2}
                  marginRight={4}
                  fontSize="sm"
                  fontWeight="500"
                  textAlign="justify"
                  color="grey"
                >
                  {detail}
                </Text>
                <Text
                  marginTop={2}
                  marginRight={4}
                  fontSize="sm"
                  fontWeight="500"
                  textAlign="justify"
                  color="#BAA"
                >
                  24 Jan 2024
                </Text>
              </Flex>
            </Link>
          </Center>
          <Spacer />
          <Center>
            <Flex>
              <Link href={"/edit/" + id}>
                <IconButton
                  aria-label="Edit"
                  icon={<EditIcon />}
                  bgColor="white"
                  variant="solid"
                  fontSize={20}
                />
              </Link>
              <IconButton
                aria-label="Delete"
                icon={<DeleteIcon />}
                bgColor="white"
                color="red"
                variant="solid"
                fontSize={20}
                onClick={onDeleteClick}
              />
            </Flex>
          </Center>
        </Flex>
      </CardBody>
    </Card>
  );
}
