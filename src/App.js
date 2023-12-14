import React, { createContext, useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import MainContent from "./components/Maincontent/MainContent";
import Slider from "./components/Slider/Slider";

import { CardContent } from "./utils/utils";
export const BookContext = createContext();
export const MyContext = createContext();
function App() {
  const [suma, setSum] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const [sumaFav, setSumFav] = useState(0);

  const [catalog, setCatalog] = useState(CardContent);
  const addFavorite = (index) => {
    const favoriteBook = [...catalog];
    favoriteBook[index].favorite = !favoriteBook[index].favorite;
    setCatalog(favoriteBook);
  };
  const removeFavorite = (index) => {
    const remove = [...favorite];
    remove[index].favorite = !remove[index].favorite;
    setFavorite(remove);
  };
  return (
    <BookContext.Provider
      value={{
        suma,
        setSum,
        favorite,
        setFavorite,
        addFavorite,
        catalog,
        setCatalog,
        addFavorite,
        setSumFav,
        sumaFav,
        removeFavorite,
      }}
    >
      {" "}
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
