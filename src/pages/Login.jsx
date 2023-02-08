import {
  Box,
  Input,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import login from "../assets/login-amico.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Flex w="85%" m="auto" alignItems="center" mt="10" gap="10">
      <Box
        w="100%"
        p={{ base: "" }}
        padding={{ base: "0", md: "10" }}
      >
        <Flex alignItems="center" justifyContent="center" mt="10" mb="5">
          <Text fontWeight="bold" fontSize="25px" color="#455a64">Login to</Text>
          <Link to="/">
            <Image
              w="10"
              ml="3"
              mr="2"
              src="https://cdn-icons-png.flaticon.com/512/2076/2076538.png"
              alt="logo"
            />
          </Link>
          <Text fontWeight="bold" fontSize="25px" color="#455a64">
            {" "}
            gossip.
          </Text>
        </Flex>
        <form>
          <Box>
            <Input type="" placeholder="Email" />
          </Box>

          <Box mt="4">
            <Input type="password" placeholder="Password" />
          </Box>

          <Link to="/home">
            <Button
              px="8"
              mt="6"
              color="white"
              bg="#455a64"
              _hover={{ bg: "#455a64", boxShadow: "2xl" }}
              variant="solid"
            >
              Login
            </Button>
          </Link>
        </form>
        <Text mt="3">You don't have an account? <Link to="/register">Register</Link></Text>
      </Box>

      <Box w="100%" display={{ base: "none", md: "flex" }}>
        <Image w="100%" src={login} alt="login" />
      </Box>
    </Flex>
  );
};

export default Login;
