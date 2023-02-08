import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex w="100%" h="10" alignItems="center" justifyContent="space-between">
      <Flex gap="2" alignItems="center">
        <Image
          w="5"
          src="https://cdn-icons-png.flaticon.com/512/2076/2076538.png"
          alt="logo"
        />
        <Text fontSize="16px" color="white">
          gossip.
        </Text>
      </Flex>
      <Box>
        <Image
          w="10"
          src="https://cdn-icons-png.flaticon.com/512/4825/4825123.png"
          alt="user"
        />

      </Box>
    </Flex>
  );
};

export default Header;
