import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const Inputs = () => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      bg="#233448"
      gap="5"
      pl="10"
      pt="5"
      pr="10"
      pb="5"
      alignItems="baseline"
      w="73%"
      marginLeft="27%"
    >
      <Flex color="white" fontSize="18px" alignItems="center" gap="5">
      <i class="fa-solid fa-face-smile"></i>
        <Input type="file" display="none" id="file" />
        <label htmlFor="file">
          <i className="fa-solid fa-paperclip"></i>
        </label>
      </Flex>
      <Flex w="100%">
        <Input
          border="none"
          borderBottom="1px solid white"
          borderRadius="none"
          color="white"
          variant="unstyled"
          placeholder="Type a message..."
        />
        <Button colorScheme="gray">
          <i className="fa-solid fa-paper-plane"></i>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Inputs;
