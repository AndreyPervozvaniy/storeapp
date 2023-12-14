import { Button, Flex, Icon, Image, Text, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CardContent } from "../../utils/utils";
import { MdFavoriteBorder } from "react-icons/md";

import { BiCheck } from "react-icons/bi";
import { useContext } from "react";
import { BookContext } from "../../App";
const Card = () => {
  const [addInBag, setAddInBag] = useState([]);
  const {
    setSum,
    favorite,
    setFavorite,
    addFavorite,
    catalog,
    setCatalog,
    setSumFav,
  } = useContext(BookContext);
  const changeStatus = (index) => {
    const newStatus = [...catalog];
    newStatus[index].status = !newStatus[index].status;
    setCatalog(newStatus);
  };

  useEffect(() => {
    const filterCatalog = catalog.filter((book) => book.status);
    setAddInBag(filterCatalog);
  }, [catalog]);
  useEffect(() => {
    const filterCatalog = catalog.filter((book) => book.favorite);
    setFavorite(filterCatalog);
  }, [catalog, favorite]);
  useEffect(() => {
    const sumPay = addInBag.reduce((init, books) => init + +books.price, 0);
    setSum(sumPay);
  }, [addInBag]);
  useEffect(() => {
    const sumPay = favorite.reduce((init, books) => init + +books.price, 0);
    setSumFav(sumPay);
  }, [favorite]);

  return (
    <Container maxW={"8xl"} justifyContent={"center"}>
      <Flex flexWrap="wrap" gridGap={6} justifyContent={"center"}>
        {CardContent.map((card, index) => (
          <Flex
            m={4}
            key={index}
            p={4}
            transition={"0.2s ease-in-out"}
            _hover={{
              boxShadow: "0px 14px 30px rgba(0, 0, 0, 0.05)",
              border: "1px solid black",
            }}
            borderRadius={"20px"}
            border={"1px solid transparent"}
          >
            <Flex flexDir={"column"}>
              <Button
                w={"10px"}
                pos={"absolute"}
                opacity={"40%"}
                _hover={{ opacity: "100%" }}
                onClick={() => addFavorite(index)}
              >
                {" "}
                {card.favorite ? (
                  <Icon as={BiCheck} w={6} h={6} />
                ) : (
                  <Icon as={MdFavoriteBorder} w={6} h={6} />
                )}
              </Button>
              <Image
                borderRadius={"10px"}
                cursor={"pointer"}
                src={card.image}
                h={"250px"}
                w={"200px"}
              ></Image>{" "}
              <Text m="1" textAlign={"center "} fontWeight={"bold"}>
                {" "}
                {card.name}
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
                  {card.price}
                </Text>
                <Button
                  mt={1}
                  border={"none"}
                  onClick={() => changeStatus(index)}
                  background={"white"}
                >
                  {card.status ? "Remove" : "Add"}
                  <Icon as={CiCirclePlus} w={6} h={6} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Card;
