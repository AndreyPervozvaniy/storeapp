import React, { useEffect, useMemo, useState } from "react";

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
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BookContext } from "../../App";
import { MdOutlineCancel } from "react-icons/md";
import emptybag from "../../assets/img/emptybag.jpg";
import novaposhta from "../../assets/img/nova.jpg";
import ukrposhta from "../../assets/img/ukrposhta.png";
import { GiPostOffice } from "react-icons/gi";
import { LuBus } from "react-icons/lu";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useGetSum } from "../../hooks";

const CALCULATION = {
  ADD: "+",
  MINUS: "-",
};

const rangePriceUkr = 400;
const rangePriceNova = 800;

const DrawerBag = ({ isOpen, onClose, inBag }) => {
  const { setCatalog } = useContext(BookContext);

  const sum = useGetSum(inBag);

  const [rangeValues, setRangeValues] = useState([sum, 800]);

  useEffect(() => {
    setRangeValues([sum, 800]);
  }, [sum]);

  const removeFromBag = (id) => {
    setCatalog((prev) =>
      prev.map((book) => (book.id === id ? { ...book, inBag: false } : book))
    );
  };

  const onChangeCount = (id, condition) => {
    setCatalog((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              count:
                condition === CALCULATION.ADD ? book.count + 1 : book.count - 1,
            }
          : book
      )
    );
  };

  return (
    <Flex>
      <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderLeftRadius="30px">
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Shop Bag {inBag?.length}
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {!inBag?.length ? (
              <Flex flexDirection={"column"}>
                <Image src={emptybag} />
                <Button
                  variant="outline"
                  border={"none"}
                  onClick={onClose}
                  borderRadius={"50px"}
                  _hover={{ background: "#f7d0d0" }}
                >
                  <Text color={"red"}>To store</Text>
                </Button>
              </Flex>
            ) : (
              inBag?.map((item, index) => (
                <Flex
                  key={index}
                  flexDir={"column"}
                  borderBottom={
                    index < inBag.length - 1 ? "1px solid #ccc" : ""
                  }
                >
                  <Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    m={2}
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
                      <Text fontWeight={"bold"}>Price: {item.price} UAH</Text>
                    </Flex>
                    <Flex w={"110px"}>
                      <Flex
                        flexDir={"column"}
                        justifyContent={"center"}
                        w="110px"
                      >
                        {" "}
                        <Flex
                          mb="5px"
                          justifyContent="center"
                          alignItems="center"
                          onClick={() => removeFromBag(item.id)}
                          _hover={{ color: "#f5f2f2" }}
                          background={"none"}
                        >
                          <Icon
                            border="1px solid white"
                            borderRadius="100%"
                            _hover={{
                              bgColor: "grey",
                              border: "1px solid grey",
                            }}
                            as={MdOutlineCancel}
                            w={7}
                            h={7}
                            color={"black"}
                            cursor={"pointer"}
                          />
                        </Flex>{" "}
                        <Flex
                          flexDir={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          border={"1px solid #ccc"}
                          borderRadius={"20px"}
                          w={"110px"}
                        >
                          {" "}
                          <Button
                            background={"white"}
                            borderLeftRadius={"20px"}
                            onClick={() => {
                              if (item.count > 1) {
                                onChangeCount(item.id, CALCULATION.MINUS);
                              }
                            }}
                          >
                            <Text color={"#grey"}>-</Text>
                          </Button>
                          <Text mx={2}>{item.count}</Text>{" "}
                          <Button
                            background={"white"}
                            isDisabled={item.count === 9}
                            borderRightRadius={"20px"}
                            onClick={() => {
                              if (item.count < 9) {
                                onChangeCount(item.id, CALCULATION.ADD);
                              }
                            }}
                          >
                            <Text>+</Text>
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            )}
          </DrawerBody>
          {inBag?.length && (
            <DrawerFooter background={"#ccc"}>
              <Flex flexDir={"column"} w={"full"}>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  Add more books for free deliver
                </Text>
                <Flex justifyContent={"space-between"} w={"full"}>
                  <Flex alignItems={"center"}>
                    <Image
                      mr={2}
                      borderRadius={"20px"}
                      h={"20px"}
                      w={"20px"}
                      src={ukrposhta}
                    />
                    <Text>On post:</Text>
                  </Flex>

                  <Text fontWeight={"bold"} fontSize={"lg"}>
                    {sum > 400 ? "Free" : rangePriceUkr - sum + " UAH"}
                  </Text>
                </Flex>{" "}
                <Flex justifyContent={"space-between"} w={"full"}>
                  <Flex alignItems={"center"}>
                    <Image
                      mr={2}
                      borderRadius={"20px"}
                      h={"20px"}
                      w={"20px"}
                      src={novaposhta}
                    />
                    <Text>On post:</Text>
                  </Flex>

                  <Text fontWeight={"bold"} fontSize={"lg"}>
                    {sum > 800 ? "Free" : rangePriceNova - sum + " UAH"}
                  </Text>
                </Flex>{" "}
                <Flex justifyContent={"space-between"} w={"full"}>
                  <Flex alignItems={"center"}>
                    <Image
                      mr={2}
                      borderRadius={"20px"}
                      h={"20px"}
                      w={"20px"}
                      src={novaposhta}
                    />
                    <Text>On post cell:</Text>
                  </Flex>

                  <Text fontWeight={"bold"} fontSize={"lg"}>
                    {sum > 800 ? "Free" : rangePriceNova - sum + " UAH"}
                  </Text>
                </Flex>
                {sum < rangePriceNova && (
                  <RangeSlider
                    value={rangeValues}
                    min={0}
                    max={800}
                    onChange={(newValues) => setRangeValues(newValues)}
                    isReadOnly="true"
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={8} cursor={"default"} index={0}>
                      {" "}
                      <Box color="black" as={LuBus} />
                    </RangeSliderThumb>
                    <RangeSliderThumb boxSize={8} cursor={"default"} index={1}>
                      {" "}
                      <Box color="black" as={GiPostOffice} />
                    </RangeSliderThumb>
                  </RangeSlider>
                )}
              </Flex>
            </DrawerFooter>
          )}

          <DrawerFooter>
            <Flex flexDir={"column"} w={"full"}>
              {" "}
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                {" "}
                <Text color={"grey"}>To pay without deliver : </Text>
                <Text fontWeight={"bold"} fontSize={"2xl"}>
                  {" "}
                  {sum} UAH
                </Text>
              </Flex>
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
