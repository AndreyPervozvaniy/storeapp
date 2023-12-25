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
  const [addInBag, setAddInBag] = useState([]);
  const [catalog, setCatalog] = useState(CardContent);
  const [bookCount, setBookCount] = useState(0);
  const [pressedTransfer, setPressedTransfer] = useState(CardContent);
  const [isOpenBag, setIsOpenBag] = useState(false);
  const onCloseBag = () => {
    setIsOpenBag(false);
  };

  const onOpenBag = () => {
    setIsOpenBag(true);
  };
  const transBook = (index) => {
    const trans = [...favorite];
    trans[index].status = !trans[index].status;
    setAddInBag(trans);
    setBookCount(bookCount + trans[index].count);
    setPressedTransfer(true);
    setIsOpenBag(true);
  };
  const bookCountPlus = (index) => {
    const count = [...addInBag];
    count[index].count = count[index].count + 1;
    setAddInBag(count);
    setBookCount(bookCount + 1);
  };
  const bookCountMinus = (index) => {
    const count = [...addInBag];
    count[index].count = count[index].count - 1;
    setAddInBag(count);
    setBookCount(bookCount - 1);
  };
  const addFavorite = (index) => {
    const favoriteBook = [...catalog];
    favoriteBook[index].favorite = !favoriteBook[index].favorite;
    setCatalog(favoriteBook);
  };
  const addBag = (index) => {
    const newStatus = [...catalog];
    newStatus[index].status = !newStatus[index].status;
    setCatalog(newStatus);
    setBookCount(bookCount + newStatus[index].count);
  };
  const removeFavorite = (index) => {
    const remove = [...favorite];
    remove[index].favorite = !remove[index].favorite;
    setFavorite(remove);
  };
  const removeBag = (index) => {
    const remove = [...addInBag];
    remove[index].status = !remove[index].status;
    setAddInBag(remove);
    setBookCount(bookCount - remove[index].count, (remove[index].count = 1));
  };
  useEffect(() => {
    const countChecker = addInBag.map((book, index) => {
      if (book.count < 1) {
        removeBag(index);
        setBookCount(bookCount - book.count);
      }
    });
  }, [addInBag]);
  useEffect(() => {
    const filterCatalog = catalog.filter((book) => book.status);
    setAddInBag(filterCatalog);
  }, [catalog, addInBag]);
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
        bookCountPlus,
        sumaFav,
        removeFavorite,
        addInBag,
        bookCountMinus,
        setIsOpenBag,
        setAddInBag,
        addBag,
        removeBag,
        transBook,
        bookCount,
        setBookCount,
        pressedTransfer,
        onCloseBag,
        isOpenBag,
        onOpenBag,
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
