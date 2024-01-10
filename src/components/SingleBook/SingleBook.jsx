import {
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { useContext } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { BookContext } from "../../App";
const SingleBook = () => {
  const { catalog, setCatalog } = useContext(BookContext);

  const toggleFavorite = (id, isFavorite) => {
    setCatalog((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, isFavorite: !isFavorite } : book
      )
    );
  };

  const addToBag = (id) => {
    setCatalog((prev) =>
      prev.map((book) => (book.id === id ? { ...book, inBag: true } : book))
    );
  };

  return (
    <Container maxW={"8xl"} justifyContent={"center"}>
      <Flex flexWrap="wrap" gridGap={6} justifyContent={"center"}>
        {catalog.map((singleBook) => (
          <Flex
            m={4}
            key={singleBook.id}
            p={6}
            transition={"0.2s ease-in-out"}
            _hover={{
              boxShadow: "0px 14px 30px rgba(0, 0, 0, 0.05)",
              border: "1px solid black",
            }}
            borderRadius={"20px"}
            border={"1px solid transparent"}
            flexWrap={"wrap"}
          >
            {singleBook.fishka || singleBook.titul ? (
              <Flex
                pos={"absolute"}
                ml={180}
                mt={2}
                h={7}
                textAlign={"center"}
                flexDir={"column"}
              >
                <Text
                  background={"green"}
                  borderRadius={"20px 20px 0px 20px"}
                  w={10}
                  color={"white"}
                  my={1}
                >
                  {singleBook.fishka}
                </Text>{" "}
                <Text
                  background={"orange"}
                  borderRadius={"20px 20px 0px 20px"}
                  w={10}
                  color={"white"}
                >
                  {singleBook.titul}
                </Text>
              </Flex>
            ) : (
              ""
            )}
            <Flex flexDir={"column"}>
              <Button
                w={"10px"}
                pos={"absolute"}
                opacity={"40%"}
                _hover={{ opacity: "100%" }}
                onClick={() =>
                  toggleFavorite(singleBook.id, singleBook.isFavorite)
                }
              >
                <Icon
                  as={singleBook.isFavorite ? BiCheck : MdFavoriteBorder}
                  w={6}
                  h={6}
                />
              </Button>
              <Image
                borderRadius={"10px"}
                cursor={"pointer"}
                src={singleBook.image}
                h={"250px"}
                w={"200px"}
              />
              <Text
                m="1"
                textAlign={"center "}
                fontWeight={"bold"}
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {singleBook.name}
              </Text>
              <Flex
                flexDir={"row"}
                m={2}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                <Text fontWeight={"bold"}>
                  {" "}
                  <Text>Price:</Text>
                  {singleBook.price} UAH
                </Text>
                {singleBook.inBag ? (
                  <Flex mt={1} justifyContent="center" alignItems="center">
                    <Text fontWeight="bold" cursor="default">
                      Added
                    </Text>
                    <Icon as={MdOutlineDownloadDone} w={5} h={5} />
                  </Flex>
                ) : (
                  <Button
                    mt={1}
                    border={"none"}
                    onClick={() => addToBag(singleBook.id)}
                    background={"red"}
                    _hover={{ background: "tomato" }}
                    borderRadius={"30px"}
                  >
                    <Text color={"white"}>Add</Text>
                    <Icon as={CiCirclePlus} color={"white"} w={6} h={6}></Icon>
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default SingleBook;
