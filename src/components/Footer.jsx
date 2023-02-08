import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      bg="#455a64"
      color="white"
      w="100%"
      p="3"
      mt="5"
      fontSize="14px"
      justifyContent="center"
      alignItems="center"
    >
      <Text>© 2023</Text>{" "}
      <Image
        w="5"
        ml="3"
        mr="2"
        src="https://cdn-icons-png.flaticon.com/512/2076/2076538.png"
        alt="logo"
      />
      <Text> gossip. Made By Vrushabh Veer</Text>
    </Flex>
  );
};

export default Footer;
