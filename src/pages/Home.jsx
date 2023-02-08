import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";


const Home = () => {
  return (
    <>
      <Box h="100vh" w="100%" display="flex">
        <Sidebar />
        <Chat />
      </Box>
    </>
  );
};

export default Home;
