import React from "react";
import Head from "next/head";

import Menu from "../components/Menu";

import { Flex, Heading, Stack, Text, Box, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - ContentArea */}
        <Flex
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Heading
            textAlign={"center"}
            align={"center"}
            fontWeight="normal"
            mb={12}
            letterSpacing="tight"
          >
            About this app... 🚀
          </Heading>
          <Stack textAlign={"center"} align={"center"} mt={30}>
            <Text fontSize={18} color={"gray.500"} maxW={"3xl"}>
              This app is created for the health conscious, for biohackers, or for anyone else who finds themselves with stock/inventory issues when it comes to
              home management of vitamins, minerals, supplements, etc. <br /> <br /> Supplementory App will help you manage your inventory and track spending. <br />More features to come...
            </Text>
            <Flex w={"full"} alignItems="center" justifyContent="center">
              <Box boxSize="sm" mt={30}>
                <Image src="about.jpeg" alt="Project Image" />
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
