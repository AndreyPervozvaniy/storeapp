import React, { createContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/Maincontent";
import Slider from "./components/Slider/Slider";
import axios from "axios";

export const BookContext = createContext();

function App() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    function getData() {
      const request = axios
        .get("https://659fbce75023b02bfe8a5607.mockapi.io/books")
        .then((res) => setCatalog(res.data));
      console.log(request);
    }
    getData();
  }, []);
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
