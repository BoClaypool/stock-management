import { Flex, Heading, Avatar, Text, Icon, Link } from "@chakra-ui/react";
import { FiHome, FiAlignJustify, FiCoffee, FiGithub } from "react-icons/fi";

export default function Menu() {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex flexDir="column" justifyContent="space-between" h="100vh">
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
          >
            Stock.
          </Heading>
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiHome} fontSize="2xl" className="active-icon" />
              </Link>
              <Link href="/" _hover={{ textDecor: "none" }}>
                <Text className="active">Home</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiCoffee} fontSize="2xl" />
              </Link>
              <Link href="/about" _hover={{ textDecor: "none" }}>
                <Text>Sobre</Text>
              </Link>
            </Flex>
            <a
              href="https://github.com/iamdevmarcos/stock-management"
              target="_blank"
            >
              <Flex className="sidebar-items">
                <Icon as={FiGithub} fontSize="2xl" />
                <Text>Github</Text>
              </Flex>
            </a>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Avatar my={3} src="profile.png" />
          <Text textAlign="center">Marcos Andre</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
