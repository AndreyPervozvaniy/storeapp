import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/header";
import MainContent from "./components/maincontent/maincontent";
import Slider from "./components/slider/slider";
function App() {
  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      fontFamily={"Inter"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Header />
      <Slider />
      <MainContent />
    </Flex>
  );
}

export default App;
