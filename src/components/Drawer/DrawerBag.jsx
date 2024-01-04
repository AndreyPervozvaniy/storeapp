import React, { useEffect, useState } from "react";

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
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import emptybag from "../../assets/img/emptybag.jpg";
import novaposhta from "../../assets/img/nova.jpg";
import { GiBus } from "react-icons/gi";
import ukrposhta from "../../assets/img/ukrposhta.png";
import { GiPostOffice } from "react-icons/gi";
import { LuBus } from "react-icons/lu";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
const DrawerBag = ({ isOpen, onClose }) => {
  const {
    addInBag,
    removeFavorite,
    removeBag,
    bookCount,
    suma,
    setBookCount,
    bookCountMinus,
    bookCountPlus,
  } = useContext(BookContext);
  const [rangePriceUkr, setRangePriceUkr] = useState(400);
  const [rangePriceNova, setRangePriceNova] = useState(800);
  const [rangeValues, setRangeValues] = useState([suma, 800]);

  useEffect(() => {
    setRangeValues([suma, 800]);
  }, [suma]);

  return (
    <Flex>
      <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
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
                  onClick={onClose}
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
                    index < addInBag.length - 1 ? "1px solid #ccc" : ""
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
                          border={"1px solid #ccc"}
                          borderRadius={"20px"}
                          w={"110px"}
                        >
                          {" "}
                          <Button
                            background={"white"}
                            borderLeftRadius={"20px"}
                            onClick={() => {
                              if (item.count > 0) {
                                bookCountMinus(index);
                              }
                            }}
                          >
                            <Text color={"#grey"}>-</Text>
                          </Button>
                          <Text mx={2}>{item.count}</Text>{" "}
                          {item.count < 9 ? (
                            <Button
                              background={"white"}
                              borderRightRadius={"20px"}
                              onClick={() => {
                                if (item.count < 9) {
                                  bookCountPlus(index);
                                }
                              }}
                            >
                              {" "}
                              <Text>+</Text>
                            </Button>
                          ) : (
                            <Button
                              cursor={"default"}
                              background={"white"}
                              borderRightRadius={"20px"}
                              _hover={{ background: "white" }}
                            >
                              {" "}
                              <Text color={"#ccc"}>+</Text>
                            </Button>
                          )}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            )}
          </DrawerBody>
          {addInBag.length < 1 ? (
            <></>
          ) : (
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
                  {suma > 400 ? (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      Free
                    </Text>
                  ) : (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      {rangePriceUkr - suma} UAH
                    </Text>
                  )}
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
                  {suma > 800 ? (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      Free
                    </Text>
                  ) : (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      {rangePriceNova - suma} UAH
                    </Text>
                  )}
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
                  {suma > 800 ? (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      Free
                    </Text>
                  ) : (
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      {rangePriceNova - suma} UAH
                    </Text>
                  )}
                </Flex>
                {suma < rangePriceNova ? (
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
                ) : (
                  <></>
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
                  {suma} UAH
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
