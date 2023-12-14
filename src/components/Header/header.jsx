import React from "react";
import { Flex, Icon, Image, Text, Input } from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";

import { useState } from "react";
import DrawerTemplate from "../Drawer/Drawer";

const Header = () => {
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);

  const onCloseFavorite = () => {
    setIsOpenFavorite(false);
  };

  const onOpenFavorite = () => {
    setIsOpenFavorite(true);
  };
  return (
    <Flex>
      <Flex
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
          <Icon as={FaShoppingBag} w={7} h={7} m={2} cursor={"pointer"} />
          <Text as="span" fontWeight={"bold"}>
            UAH
          </Text>{" "}
          <Icon
            as={MdFavoriteBorder}
            w={8}
            h={8}
            onClick={onOpenFavorite}
            m={2}
            cursor={"pointer"}
          ></Icon>
          <Icon as={RxAvatar} w={8} h={8} m={2} cursor={"pointer"}></Icon>
        </Flex>
      </Flex>{" "}
      <DrawerTemplate
        isOpenFavorite={isOpenFavorite}
        onCloseFavorite={onCloseFavorite}
      />
    </Flex>
  );
};

export default Header;
