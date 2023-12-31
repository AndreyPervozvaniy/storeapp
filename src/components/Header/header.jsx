import React from "react";
import { Flex, Icon, Image, Text, Input } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { useState } from "react";
import DrawerFavorite from "../Drawer/DrawerFavorite";
import { BookContext } from "../../App";
import DrawerBag from "../Drawer/DrawerBag";
const Header = () => {
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);
  const [isOpenBag, setIsOpenBag] = useState(false);
  const { suma, setSum, favorite, addInBag, bookCount } =
    useContext(BookContext);
  const onCloseFavorite = () => {
    setIsOpenFavorite(false);
  };

  const onOpenFavorite = () => {
    setIsOpenFavorite(true);
  };
  const onCloseBag = () => {
    setIsOpenBag(false);
  };

  const onOpenBag = () => {
    setIsOpenBag(true);
  };
  return (
    <Flex>
      <Flex
        zIndex={1}
        pos={"fixed"}
        w={"100%"}
        background={"#dcddde"}
        alignContent={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid grey"}
      >
        <Flex>
          <Image src={Logo} w={"250px"} cursor={"pointer"} />
          <Flex flexDir={"column"} m={2} fontWeight={"bold"}>
            <Text>We know a thing...</Text>
            <Text>And you find that...</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} px={6}>
          <Flex p={2}>
            {" "}
            <Icon
              as={FaShoppingBag}
              w={7}
              h={7}
              _hover={{ color: "red" }}
              m={2}
              cursor={"pointer"}
              onClick={onOpenBag}
            />{" "}
            <Text color={"red"} ml={9} pos="absolute">
              {bookCount >= 1 && bookCount}
            </Text>
          </Flex>
          <Text as="span" fontWeight={"bold"}>
            {suma >= 1 && suma + "UAH"}
          </Text>{" "}
          <Flex p={2}>
            <Icon
              as={MdFavoriteBorder}
              w={8}
              h={8}
              onClick={onOpenFavorite}
              m={2}
              cursor={"pointer"}
              _hover={{ color: "red" }}
            ></Icon>{" "}
            <Text color={"red"} pos={"absolute"} ml={10}>
              {favorite.length >= 1 && favorite.length}
            </Text>
          </Flex>
          <Icon
            as={RxAvatar}
            w={8}
            h={8}
            _hover={{ color: "red" }}
            m={2}
            cursor={"pointer"}
          ></Icon>
        </Flex>
      </Flex>{" "}
      <DrawerFavorite
        isOpenFavorite={isOpenFavorite}
        onCloseFavorite={onCloseFavorite}
      />
      <DrawerBag isOpenBag={isOpenBag} onCloseBag={onCloseBag} />
    </Flex>
  );
};

export default Header;
