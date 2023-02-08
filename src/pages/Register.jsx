import {
  Box,
  Input,
  Flex,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import regiser from "../assets/resister-pana.png";
import { Link } from "react-router-dom";

const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="85%" m="auto" alignItems="center" mt="10" gap="10">
        <Box w="100%" p={{ base: "" }} padding={{ base: "0", md: "10" }}>
          <Flex alignItems="center" justifyContent="center" mt="10" mb="5">
            <Text fontWeight="bold" fontSize="25px" color="#455a64">
              Register to
            </Text>
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
          <form >
            <Box>
              <Image src="" alt="" />
              <Input type="text" placeholder="Display Name" autoComplete="username"/>
            </Box>
            <Box mt="4">
              <Input type="email" placeholder="Email" autoComplete="email" />
            </Box>

            <Box mt="4">
              <Input type="password" placeholder="Password" autoComplete="current-password" />
            </Box>

            <Box mt="5">
              <Input id="file" display="none" type="file" />
              <Text textAlign="left">Select Avatar from</Text>
              <Flex alignItems="center" gap="8" mt="2">
                <label htmlFor="file">
                  <Flex alignItems="center" gap="2">
                    <Image
                      cursor="pointer"
                      w="8"
                      src="https://cdn-icons-png.flaticon.com/512/4503/4503941.png"
                      alt="galary"
                    />
                    <Text>Gallary</Text>
                  </Flex>
                </label>
                
                <Flex alignItems="center" gap="2" onClick={onOpen}>
                  <Image
                    cursor="pointer"
                    
                    w="7"
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    alt="default"
                  />
                  <Text>select from Default</Text>
                </Flex>
              </Flex>
            </Box>
            <Button
              px="8"
              mt="8"
              color="white"
              bg="#455a64"
              _hover={{ bg: "#455a64", boxShadow: "2xl" }}
              variant="solid"
            >
              Register
            </Button>
          </form>
          <Text mt="3">
            Already User? <Link to="/login">Login</Link>
          </Text>
        </Box>

        <Box w="100%" display={{ base: "none", md: "flex" }}>
          <Image w="100%" src={regiser} alt="regiser" />
        </Box>
      </Flex>

      {/* modal */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <SimpleGrid columns={4} m="auto" gap="5">
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825112.png" alt="" />
            </Box>
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825015.png" alt="" />
            </Box>
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825038.png" alt="" />
            </Box>
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825027.png" alt="" />
            </Box>

            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825123.png" alt="" />
            </Box>
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825087.png" alt="" />
            </Box>

            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825076.png" alt="" />
            </Box>
            <Box>
              <Image cursor="pointer" w="20" src="https://cdn-icons-png.flaticon.com/512/4825/4825062.png" alt="" />
            </Box>
          </SimpleGrid>
          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
