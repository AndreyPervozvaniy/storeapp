import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../card/card";
const MainContent = () => {
  return (
    <Flex flexDir={"column"}>
      <Text fontSize={"lg"} fontWeight={"bold"} p={4}>
        All Books
      </Text>
      <Flex>
        <Flex>
          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default MainContent;
