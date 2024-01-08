import React from "react";

const PickedBooks = ({ books }) => {
  return books?.map((item, index) => (
    <Flex
      key={index}
      flexDir={"column"}
      borderBottom={index < inBag.length - 1 ? "1px solid #ccc" : ""}
    >
      <Flex
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={2}
      >
        <Image src={item.image} alt={item.name} h={"100px"} w={"70px"} />
        <Flex flexDir={"column"} textAlign={"center"}>
          {" "}
          <Text>{item.name}</Text>
          <Text fontWeight={"bold"}>Price: {item.price} UAH</Text>
        </Flex>
        <Flex w={"110px"}>
          <Flex flexDir={"column"} justifyContent={"center"} w="110px">
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
  ));
};

export default PickedBooks;
