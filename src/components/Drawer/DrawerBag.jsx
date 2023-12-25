import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BookContext } from "../../App";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import emptybag from "../../assets/img/emptybag.jpg";
const DrawerBag = ({ isOpenBag, onCloseBag }) => {
  const {
    addInBag,
    removeFavorite,
    removeBag,
    bookCount,
    setBookCount,
    bookCountMinus,

    bookCountPlus,
  } = useContext(BookContext);
  return (
    <Flex>
      <Drawer
        isOpen={isOpenBag}
        placement="right"
        size={"md"}
        onClose={onCloseBag}
      >
        <DrawerOverlay />
        <DrawerContent borderLeftRadius="30px">
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Shop Bag ({bookCount})
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {addInBag.length === 0 ? (
              <Flex flexDirection={"column"}>
                <Image src={emptybag} />{" "}
                <Button
                  variant="outline"
                  border={"none"}
                  onClick={onCloseBag}
                  borderRadius={"50px"}
                  _hover={{ background: "#f7d0d0" }}
                >
                  <Text color={"red"}>To store</Text>
                </Button>
              </Flex>
            ) : (
              addInBag.map((item, index) => (
                <Flex
                  key={index}
                  flexDir={"column"}
                  borderBottom={
                    index < addInBag.length - 1 ? "1px solid grey" : ""
                  }
                  _hover={{ background: "#f5eded" }}
                >
                  <Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    m={2}
                    cursor={"pointer"}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      h={"100px"}
                      w={"70px"}
                    />
                    <Flex flexDir={"column"} textAlign={"center"}>
                      {" "}
                      <Text>{item.name}</Text>
                      <Text>Price: {item.price} UAH</Text>
                    </Flex>
                    <Flex w={"60px"}>
                      <Flex
                        flexDir={"column"}
                        justifyContent={"center"}
                        w="40px"
                      >
                        {" "}
                        <Button
                          onClick={() => removeBag(index)}
                          _hover={{ color: "#f5f2f2" }}
                          background={"none"}
                        >
                          <Icon
                            as={MdOutlineCancel}
                            w={7}
                            h={7}
                            color={"black"}
                            cursor={"pointer"}
                          />
                        </Button>{" "}
                        <Flex
                          flexDir={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Button
                            borderRadius={"20px"}
                            onClick={() => {
                              if (item.count < 10) {
                                bookCountPlus(index);
                              }
                            }}
                          >
                            +
                          </Button>
                          <Text>{item.count}</Text>
                          <Button
                            borderRadius={"20px"}
                            onClick={() => {
                              if (item.count > 0) {
                                bookCountMinus(index);
                              }
                            }}
                          >
                            -
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            )}
          </DrawerBody>

          <DrawerFooter>
            <Flex flexDir={"column"} w={"full"}>
              <Flex
                flexDir={"column"}
                w={"full"}
                justifyContent={"space-between"}
              >
                <Button colorScheme="red" my={2} borderRadius={"50px"}>
                  <Text>TO PAY</Text>
                </Button>{" "}
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerBag;
