import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button, Tabs, Menu } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  components: {
    Button,
    Tabs,
    Menu,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
