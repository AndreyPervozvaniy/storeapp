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
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BookContext } from "../../App";
const DrawerTemplate = ({ isOpenFavorite, onCloseFavorite }) => {
  const { favorite, addFavorite, removeFavorite, suma, sumaFav } =
    useContext(BookContext);
  const bonus = Math.ceil(sumaFav / 10);
  return (
    <Flex>
      {" "}
      <Drawer
        isOpen={isOpenFavorite}
        placement="right"
        onClose={onCloseFavorite}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shop card</DrawerHeader>

          <DrawerBody>
            {favorite.length === 0 ? (
              <Text>Нет избранных</Text>
            ) : (
              favorite.map((item, index) => (
                <Flex key={index} flexDir={"column"}>
                  <Image src={item.image} alt={item.name} />
                  <Text>{item.name}</Text>
                  <Text>Price: {item.price}</Text>
                  <Button onClick={() => removeFavorite(index)}>Remove</Button>
                </Flex>
              ))
            )}
          </DrawerBody>

          <DrawerFooter>
            <Flex flexDir={"column"}>
              <Flex m={2} flexDir={"column"}>
                <Text fontWeight={"bold"}> Total : {sumaFav} UAH</Text>
                <Text fontWeight={"bold"}>
                  Bonus: {sumaFav} UAH = {bonus} Point
                </Text>
              </Flex>
              <Flex justify={"flex-end"}>
                {" "}
                <Button variant="outline" mr={3} onClick={onCloseFavorite}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Pay</Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerTemplate;
