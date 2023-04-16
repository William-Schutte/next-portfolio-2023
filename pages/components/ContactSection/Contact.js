import { Box, Button, Flex, Link, Text, useColorMode } from "@chakra-ui/react";

import {
  greenYellowGradient,
  pinkPurpleGradient,
  pinkRedGradient,
  purpleGreenGradient,
} from "@/styles/gradients";
import ResumeCard from "./ResumeCard";
import LinkedInCard from "./LinkedInCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex pt="20" pb="20" px="4" justifyContent="space-between" id="contact">
      <Box>
        <Text textStyle="lgHeading" w="80">
          {colorMode === "light"
            ? "Looking for an amazing developer?"
            : "Looking to feel better about yourself?"}
        </Text>
        <Text
          textStyle="lgHeading"
          fontSize="7xl"
          bgGradient={
            colorMode === "light" ? pinkPurpleGradient : pinkRedGradient
          }
          bgClip="text"
          transition="2s"
        >
          {colorMode === "light" ? "Reach out here!" : "Contact this nerd:"}
        </Text>
        <Box maxW="560px" my="8">
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? "Always excited to hear about "
              : "They say enough monkeys in a room will eventually "}
          </Text>
          <Text
            display="inline"
            bgGradient={
              colorMode === "light" ? purpleGreenGradient : pinkRedGradient
            }
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            {colorMode === "light" ? "new startups, " : "write Shakespeare,"}
          </Text>
          <Text
            display="inline"
            bgGradient={
              colorMode === "light" ? purpleGreenGradient : pinkPurpleGradient
            }
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            {colorMode === "light" ? " cool opportunities" : ""}
          </Text>
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light" ? ", or " : " or something..."}
          </Text>
          <Text
            display="inline"
            bgGradient={
              colorMode === "light" ? greenYellowGradient : pinkPurpleGradient
            }
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            {colorMode === "light" ? "mentor any new developers" : ""}{" "}
          </Text>
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? " with non-traditional backgrounds switching into tech like I did. "
              : "Why not hire this code monkey?"}
          </Text>
        </Box>
        <a href="mailto: williamdschutte@gmail.com">
          <Button
            bg="linear-gradient(90deg, rgba(131,58,180,.9) 0%, rgba(253,29,29,.9) 100%);"
            color="white"
            size="lg"
            px="8"
            mt="4"
            mb="12"
            transition="all .3s ease"
            _hover={{
              opacity: 0.5,
            }}
          >
            {colorMode === "light" ? "Email me!" : "I warned you 🤷"}
          </Button>
        </a>
      </Box>
      <Box position="relative" w="50%" mt="10">
        <Flex
          w="280px"
          h="360px"
          flexDir="column"
          position="absolute"
          left="10%"
          top="0"
          m="6"
          borderRadius="2xl"
          overflow="hidden"
          transform="rotate(-5deg)"
          transition=".3s ease"
          _hover={{
            transform: "translateY(-20px) translateX(-10px) rotate(-9deg)",
          }}
          bg={
            colorMode === "light"
              ? "whiteAlpha.800"
              : "linear-gradient(90deg, hsla(60, 3%, 93%, 1) 0%, hsla(229, 61%, 85%, 1) 100%);"
          }
        >
          <ResumeCard />
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            bg={
              colorMode === "light"
                ? "rgba(250,250,250, .1)"
                : "rgba(250,250,250, .2)"
            }
            backdropFilter="saturate(.8) blur(4px)"
            color="white"
            opacity="0"
            _hover={{ opacity: 1 }}
            transition="all .3s ease"
          >
            <Link
              w="100%"
              h="100%"
              display="flex"
              _hover={{ textDecoration: "none" }}
              href="/WS Resume.pdf"
              isExternal
            >
              <Flex m="auto" color="blue.700">
                <Text textStyle="lgHeading" fontSize="4xl">
                  Resume
                </Text>
                <ExternalLinkIcon boxSize="6" m="2" />
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Flex
          w="360px"
          h="280px"
          flexDir="column"
          position="absolute"
          left="50%"
          top="6%"
          m="6"
          borderRadius="2xl"
          overflow="hidden"
          transform="rotate(3deg)"
          backdropFilter="blur(8px)"
          transition=".3s ease"
          _hover={{
            transform: "translateY(-20px) translateX(30px) rotate(9deg)",
          }}
          bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
        >
          <LinkedInCard />
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            bg="rgba(10,102,194,.5)"
            backdropFilter="saturate(.7) blur(10px)"
            color="white"
            opacity="0"
            _hover={{ opacity: 1 }}
            transition="all .3s ease"
          >
            <Link
              w="100%"
              h="100%"
              display="flex"
              _hover={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/william-schutte/"
              isExternal
            >
              <Flex m="auto">
                <Text textStyle="lgHeading" fontSize="4xl">
                  LinkedIn
                </Text>
                <ExternalLinkIcon boxSize="6" m="2" />
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
