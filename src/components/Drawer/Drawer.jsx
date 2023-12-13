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
  Text,
} from "@chakra-ui/react";

const DrawerTemplate = ({ isOpenFavorite, onCloseFavorite }) => {
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

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Flex flexDir={"column"}>
              <Flex m={2} flexDir={"column"}>
                <Text fontWeight={"bold"}> Total : 1340 UAH</Text>
                <Text fontWeight={"bold"}>Bonus: 1 UAH = 1 Point</Text>
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
