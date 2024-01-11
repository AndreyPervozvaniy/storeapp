import React, { useMemo } from "react";
import {
  Flex,
  Icon,
  Image,
  Text,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import DrawerFavorite from "../Drawer/DrawerFavorite";
import { BookContext } from "../../App";
import DrawerBag from "../Drawer/DrawerBag";
import { useGetSum } from "../../hooks";
const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    isOpen: isOpenFavorite,
    onOpen: onOpenFavorite,
    onClose: onCloseFavorite,
  } = useDisclosure();

  const { catalog } = useContext(BookContext);

  const { inBag, favorite } = useMemo(() => {
    const books = {
      favorite: [],
      inBag: [],
    };

    books.favorite = catalog.filter((book) => book.isFavorite) ?? [];
    books.inBag = catalog.filter((book) => book.inBag) ?? [];

    return books;
  }, [catalog]);

  const sum = useGetSum(inBag);

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
              onClick={onOpen}
            />{" "}
            <Text color={"red"} ml={9} pos="absolute">
              {inBag.length >= 1 && inBag.length}
            </Text>
          </Flex>
          <Text as="span" fontWeight={"bold"}>
            {sum && sum}UAH
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
        isOpenBag={isOpen}
        onOpenBag={onOpen}
        onCloseBag={onClose}
        isOpen={isOpenFavorite}
        onClose={onCloseFavorite}
        favorite={favorite}
      />
      <DrawerBag inBag={inBag} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
