import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Chats = () => {
  return (
    <Box>
      <Flex mt="5" alignItems="center" gap="4">
        <Box>
          <Image
            w="65px"
            src="https://cdn-icons-png.flaticon.com/512/4825/4825015.png"
            alt=""
          />
        </Box>
        <Box textAlign="left">
          <Text fontSize="20px" color="white">
            Tyler
          </Text>
          <Text fontSize="14px" color="#ababab">hello vrushbabh</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Chats