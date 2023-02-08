import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <>
      <Box mt="7">
        <Input
          size="sm"
          border="none"
          variant="unstyled"
          borderBottom="1px solid white"
          color="white"
          placeholder="Search..."
        />
      </Box>

      <Flex mt="10" alignItems="center" gap="4">
        <Box>
          <Image
            w="65px"
            src="https://cdn-icons-png.flaticon.com/512/4825/4825027.png"
            alt=""
          />
        </Box>
        <Box textAlign="left">
          <Text fontSize="20px" color="white">
            Laila
          </Text>
          <Text fontSize="14px" color="#ababab">send me arjent</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Search;
