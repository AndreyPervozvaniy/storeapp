import React, { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { CardContent } from "../../utils/utils";

const Test = () => {
  const [addBookInBag, setAddBookInBag] = useState([]);
  const [addedBook, setAddedBooks] = useState(CardContent);
  const [sumPay, setSumPay] = useState(0);

  useEffect(() => {
    const filteredBooks = addedBook.filter((book) => book.status === true);
    setAddBookInBag(filteredBooks);
  }, [addedBook]);

  useEffect(() => {
    const sum = addBookInBag.reduce((acc, book) => acc + +book.price, 0);
    setSumPay(sum);
  }, [addBookInBag]);

  const toggleBookStatus = (index) => {
    const updatedAddedBook = [...addedBook];
    updatedAddedBook[index].status = !updatedAddedBook[index].status;
    setAddedBooks(updatedAddedBook);
  };
  return (
    <Flex h={"100vh"} w={"full"}>
      <Flex
        flexDir={"column"}
        w={"full"}
        h={"800px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {CardContent.map((user, index) => (
          <Flex
            key={index}
            m={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text color={"black"} fontWeight={"bold"} mx={2}>
              {user.name}
            </Text>
            <Text>{user.price}</Text>
            <Button mx={2} onClick={() => toggleBookStatus(index)}>
              {user.status ? "Remove" : "Add"}
            </Button>
          </Flex>
        ))}

        <Text>{sumPay} UAH</Text>
        {/* Остальной код... */}
      </Flex>
    </Flex>
  );
};

export default Test;
