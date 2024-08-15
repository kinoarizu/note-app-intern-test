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
  id: string;
  title: string;
  detail: string;
  createdAt: string;
  onDeleteClick: () => void;
}

export default function NoteCard({
  id,
  title,
  detail,
  createdAt,
  onDeleteClick,
}: NoteCardParams) {
  return (
    <Link href={"/note/" + id} _hover={{ textDecoration: "none" }}>
      <Card _hover={{ backgroundColor: "#EEF" }} boxShadow="outline">
        <CardBody>
          <Flex>
            <Center>
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
                  {createdAt}
                </Text>
              </Flex>
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
                <Link href="/">
                  <IconButton
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    bgColor="white"
                    color="red"
                    variant="solid"
                    fontSize={20}
                    onClick={onDeleteClick}
                  />
                </Link>
              </Flex>
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}
