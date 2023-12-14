import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import Slider from "./components/Slider/Slider";
import Test from "./components/Test/Test";

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
      <Test />
    </Flex>
  );
}

export default App;
