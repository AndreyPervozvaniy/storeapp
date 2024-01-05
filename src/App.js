import React, { createContext, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import MainContent from "./components/maincontent/MainContent";
import Slider from "./components/slider/Slider";
import { CardContent } from "./utils/utils";
export const BookContext = createContext();

function App() {
  const [catalog, setCatalog] = useState(CardContent);

  return (
    <BookContext.Provider
      value={{
        catalog,
        setCatalog,
      }}
    >
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
    </BookContext.Provider>
  );
}

export default App;
