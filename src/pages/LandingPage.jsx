import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import messaging from "../assets/Messages-pana.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Flex
        alignItems="center"
        gap={{ base: "5", md: "10" }}
        w="85%"
        m="auto"
        mt={{ base: "5", md: "0" }}
        textAlign="left"
        color="#455a64"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Heading
            fontWeight="extrabold"
            fontSize={{ base: "26px", md: "40px" }}
          >
            Stay Connected with
          </Heading>
          <Heading
            fontWeight="extrabold"
            fontSize={{ base: "26px", md: "40px" }}
          >
            Your Friends & Familly.
          </Heading>
          <Text mt="3">
            ..A Platform, or a Madium. Where just you and a handful of friends
            can spend time together. A place that makes it easy to talk every
            day and hang out more often.
          </Text>
          <Flex alignItems="center" gap="6" mt="7">
            <Link to="/register">
              <Button
                rounded="full"
                px="8"
                color="white"
                bg="#455a64"
                _hover={{ bg: "#455a64", boxShadow: "2xl" }}
                variant="solid"
              >
                Register
              </Button>
            </Link>

            <Link to="/login">
              <Button
                rounded="full"
                px="6"
                colorScheme="black"
                variant="outline"
                _hover={{ boxShadow: "2xl" }}
              >
                Login
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box Box w="100%">
          <Image w="100%" src={messaging} alt="hero" />
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default LandingPage;
