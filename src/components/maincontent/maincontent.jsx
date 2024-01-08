import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CardContent } from "../../utils/utils";
import SingleBook from "../SingleBook/SingleBook";

const MainContent = () => {
  const [filterBook, setFilterBook] = useState([]);
  const handleFilter = (event) => {
    const searcWord = event.target.value;
    const newFilter = CardContent.filter((value) => {
      return value.name
        .toLowerCase()
        .trim()
        .includes(searcWord.toLowerCase().trim());
    });
    if (searcWord === "") {
      setFilterBook([]);
    } else {
      setFilterBook(newFilter);
    }
  };

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
            <Input
              w={"400px"}
              type="text"
              placeholder="Search..."
              onChange={handleFilter}
            />{" "}
          </InputGroup>{" "}
          {filterBook.length !== 0 && (
            <Flex
              background={"white"}
              overflow={"hidden"}
              overflowY={"auto"}
              w={"400px"}
              h={"150px"}
              flexWrap={"wrap"}
              pos={"absolute"}
              mt={"200px"}
              zIndex={2}
            >
              {filterBook.map((book, id) => {
                return (
                  <Flex key={id} p={2}>
                    <Flex
                      cursor={"pointer"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      textAlign={"center"}
                      borderBottom={"1px solid #ccc"}
                      p={1}
                    >
                      <Image h={"50px"} w={"40px"} src={book.image} />
                      <Text w={"300px"}>{book.name}</Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          )}
        </Stack>
      </Flex>

      <Flex>
        <Flex>
          <SingleBook />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default MainContent;
