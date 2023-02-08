import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Messages from "./Messages";
import Inputs from "./Inputs";

const Chat = () => {
    return (
        <Box w="73%">
            <Flex
                bg="#233448"
                pl="10"
                pr="10"
                alignItems="center"
                h="20"
                color="white"
                w="73%"
                justifyContent="space-between"
                position="fixed"
                marginLeft="27%"
            >
                <Flex alignItems="center" gap="4">
                    <Box>
                        <Image
                            w="40px"
                            src="https://cdn-icons-png.flaticon.com/512/4825/4825015.png"
                            alt=""
                        />
                    </Box>
                    <Box textAlign="left">
                        <Text fontSize="18px" color="white">
                            Tyler
                        </Text>
                    </Box>
                </Flex>
                <Flex alignItems="center" gap="5" color="white">
                    <i className="fa-solid fa-video"></i>
                    <Text>|</Text>
                    <i className="fa-solid fa-phone"></i>
                </Flex>
            </Flex>

            <Box textAlign="left" pl="10" pr="10" >
                <Messages />
            </Box>

            <Box>
                <Inputs />
            </Box>
        </Box>

    );
};

export default Chat;
