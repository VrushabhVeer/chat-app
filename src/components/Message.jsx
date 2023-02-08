import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Message = () => {
  return (
    <Box>
      <Box>
        <Image
          mt="8"
          w="40px"
          src="https://cdn-icons-png.flaticon.com/512/4825/4825123.png"
          alt="user"
        />
        <Text fontSize="12px">Just Now</Text>
      </Box>

      {/* content */}
      <Box maxW="80%" flexDirection="column">
        <Text maxW="max-content" bg="#e0e7ff" p="3" borderBottomRadius="15px" borderRightRadius="15px">Happy new year</Text>
        <Image
          mt="3"
          borderRadius="md"
          w="60%px"
          src="https://images.unsplash.com/photo-1670809048303-37cad1d8a415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBuZXclMjB5ZWFyJTIwMjAyM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default Message;
