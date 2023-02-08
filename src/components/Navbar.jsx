import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box px={{ base: "6", md: "110px" }} py="4">
        <Flex>
          <Flex alignItems={"center"} gap="4">
            <Image
              w={{ base: "10", md: "45px" }}
              src="https://cdn-icons-png.flaticon.com/512/2076/2076538.png"
              alt="logo"
            />
            <Text
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="bold"
              color="#455a64"
            >
              gossip.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
