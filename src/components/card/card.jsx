import { Button, Flex, Icon, Image, Text, Container } from "@chakra-ui/react";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CardContent } from "../../utils/utils";
import { MdFavoriteBorder } from "react-icons/md";
const Card = () => {
  return (
    <Container maxW={"8xl"} justifyContent={"center"}>
      <Flex flexWrap="wrap" gridGap={6} justifyContent={"center"}>
        {CardContent.map((card, index) => (
          <Flex
            m={4}
            key={index}
            p={4}
            border={"1px solid grey"}
            borderRadius={"20px"}
          >
            <Flex flexDir={"column"}>
              <Button
                w={"10px"}
                pos={"absolute"}
                opacity={"40%"}
                _hover={{ opacity: "100%" }}
              >
                <Icon as={MdFavoriteBorder} w={6} h={6} />
              </Button>
              <Image borderRadius={"10px"} src={card.image} h={"250px"}></Image>{" "}
              <Text textAlign={"center "}> {card.name}</Text>
              <Flex
                flexDir={"row"}
                m={2}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                <Text mt={2}> {card.price}</Text>
                <Button
                  border={"none"}
                  _hover={{ background: "white" }}
                  background={"white"}
                >
                  <Icon as={CiCirclePlus} w={8} h={8} />
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
