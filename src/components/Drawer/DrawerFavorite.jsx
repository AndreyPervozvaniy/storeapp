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
import { MdOutlineDownloadDone } from "react-icons/md";
const DrawerFavorite = ({ isOpenFavorite, onCloseFavorite }) => {
  const {
    favorite,
    addFavorite,
    removeFavorite,
    transBook,
    addBag,
    suma,
    onOpenBag,
    pressedTransfer,
    sumaFav,
  } = useContext(BookContext);

  return (
    <Flex>
      <Drawer
        isOpen={isOpenFavorite}
        placement="right"
        size={"md"}
        onClose={onCloseFavorite}
      >
        <DrawerOverlay />
        <DrawerContent borderLeftRadius="30px">
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Text fontWeight={"bold"} fontSize={"xl"}>
              FAVORITE ({favorite.length})
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {favorite.length === 0 ? (
              <Text>Нет избранных</Text>
            ) : (
              favorite.map((item, index) => (
                <Flex
                  key={index}
                  flexDir={"column"}
                  borderBottom={
                    index < favorite.length - 1 ? "1px solid grey" : ""
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

                    <Flex flexDir={"column"} justifyContent={"center"} w="40px">
                      {" "}
                      <Button
                        onClick={() => removeFavorite(index)}
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
                      {pressedTransfer ? (
                        <Button
                          w={"20px"}
                          borderRadius={"50%"}
                          background={"grey"}
                          my={2}
                          _hover={{ background: "#c40202" }}
                          boxShadow="1px 5px 20px grey"
                        >
                          {" "}
                          <Icon
                            as={MdOutlineDownloadDone}
                            w={5}
                            h={5}
                            color={"white"}
                            cursor={"default"}
                          />
                        </Button>
                      ) : (
                        <Button
                          w={"20px"}
                          borderRadius={"50%"}
                          background={"#fc0303"}
                          my={2}
                          _hover={{ background: "#c40202" }}
                          boxShadow="1px 5px 20px grey"
                          onClick={() => transBook(index)}
                        >
                          <Icon
                            as={TiShoppingBag}
                            w={5}
                            h={5}
                            color={"white"}
                            cursor={"pointer"}
                          />
                        </Button>
                      )}
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
                  <Text>TO BAG</Text>
                </Button>{" "}
                <Button
                  variant="outline"
                  border={"none"}
                  onClick={onCloseFavorite}
                  borderRadius={"50px"}
                  _hover={{ background: "#f7d0d0" }}
                >
                  <Text color={"red"}>CANCEL</Text>
                </Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerFavorite;
