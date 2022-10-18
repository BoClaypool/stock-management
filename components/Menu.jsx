import Link from "next/link";

import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FiHome, FiPlus, FiFolder, FiCircle } from "react-icons/fi";

export default function Menu() {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#85ABFF"
      color="#fff"
    >
      <Flex flexDir="column" justifyContent="space-between" h="100vh">
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            ml={0}
            fontSize="2xl"
            alignSelf="center"
            letterSpacing="tight"
          >
          Supplementory App
          </Heading>
          <Flex flexDir="column" align="flex-start" justifyContent="center" ml={10}>
            <Flex className="sidebar-items">
              <Link href="/">
                <Flex>
                  <Icon as={FiHome} fontSize="2xl"/>
                  <Text color="#fff" cursor={"pointer"}>
                    Home
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/about">
                <Flex>
                  <Icon as={FiCircle} fontSize="2xl" />
                  <Text color="#fff" cursor={"pointer"}>
                    About
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/about">
                <Flex>
                  <Icon as={FiFolder} fontSize="2xl" />
                  <Text color="#fff" cursor={"pointer"}>
                    FAQ
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/add">
                <Flex>
                  <Icon as={FiPlus}fontSize="2xl"/>
                  <Text color="#fff" cursor={"pointer"}>
                    Add / Modify
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  </Flex>
  );
}
