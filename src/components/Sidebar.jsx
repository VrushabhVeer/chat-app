import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <Box
      w="27%"
      h="100vh"
      bg="#233448"
      p="5"
      position="fixed"
      zIndex="1"
      top="0"
      left="0"
      overflowX="hidden"
      borderRight="1px solid #cecece"
    >
      <Header />
      <Search />
      <Chats />
    </Box>
  );
};

export default Sidebar;
