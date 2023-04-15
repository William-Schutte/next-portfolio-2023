import {
  Box,
  Button,
  Flex,
  Text,
  keyframes,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";

import {
  bluePurpleRedGradient,
  darkBlueGradient,
  greenYellowGradient,
  pinkPurpleGradient,
  pinkRedGradient,
  purpleGreenGradient,
  purpleSubtleGradient,
} from "@/styles/gradients";

export default function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex py="16" px="4" justifyContent="space-between">
      <Box>
        <Text textStyle="lgHeading" w="80">
          {colorMode === "light"
            ? "Looking for an amazing developer?"
            : "Looking to feel better about yourself?"}
        </Text>
        <Text
          textStyle="lgHeading"
          fontSize="7xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          transition="2s"
        >
          {colorMode === "light" ? "Reach out here!" : "Contact this nerd:"}
        </Text>
        <Box maxW="560px" my="8">
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? "Always excited to hear about "
              : "Get to know the most "}
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
            {colorMode === "light"
              ? "new startups, "
              : "adequate full-stack developer"}
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
            {colorMode === "light"
              ? " cool opportunities"
              : "adequate full-stack developer"}
          </Text>
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light" ? ", or " : "Get to know the most "}
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
            {colorMode === "light"
              ? "mentor any new developers"
              : "adequate full-stack developer"}{" "}
          </Text>
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? " with non-traditional backgrounds switching into tech like I did. "
              : "Get to know the most "}
          </Text>
        </Box>
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
          Let's Connect!
        </Button>
      </Box>
      <Flex
        w="460px"
        h="300px"
        flexDir="column"
        overflow="hidden"
        mx="6"
        mt="12"
        p="6"
        borderRadius="2xl"
        bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      >
        <Flex w="100%" h="50%" mb="4" position="relative">
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="0%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-react.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.200"
            position="absolute"
            left="33%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-ts.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="67%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-chakra.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.600"
            position="absolute"
            left="100%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-js.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="133%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-react.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.200"
            position="absolute"
            left="166%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-ts.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="200%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-chakra.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.600"
            position="absolute"
            left="233%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-js.svg" width={100} height={100} />
          </Box>
        </Flex>

        <Flex w="100%" position="relative" bg="black">
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="0%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-aws.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="33%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-node.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="67%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-python.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.800"
            position="absolute"
            left="100%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-docker.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="133%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-aws.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="166%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-node.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="200%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-python.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.800"
            position="absolute"
            left="233%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-docker.svg" width={100} height={100} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
