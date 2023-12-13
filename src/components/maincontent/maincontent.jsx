import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";
import { CiSearch } from "react-icons/ci";
const MainContent = () => {
  return (
    <Flex flexDir={"column"}>
      <Flex justifyContent={"space-between"} alignContent={"center"}>
        <Text fontSize={"lg"} fontWeight={"bold"} p={4}>
          All Books
        </Text>
        <Stack p={4} alignContent={"center"} justifyContent={"center"}>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Icon as={CiSearch} />
            </InputRightElement>
            <Input w={"400px"} type="text" placeholder="Search..." />
          </InputGroup>
        </Stack>
      </Flex>

      <Flex>
        <Flex>
          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default MainContent;
