import { bluePurpleRedGradient, pinkPurpleGradient } from "@/styles/gradients";
import { DeleteIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, useColorMode, Center } from "@chakra-ui/react";

export default function Title() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center h="100vh" mb="24" px="4" flexDir="column">
      <Text
        textStyle="lgHeading"
        fontSize="9xl"
        bgGradient={
          colorMode === "light" ? pinkPurpleGradient : bluePurpleRedGradient
        }
        bgClip="text"
        transition="2s"
      >
        {colorMode === "light" ? "william schutte" : '"william schutte"'}
      </Text>
      <Flex cursor="pointer" onClick={toggleColorMode} alignItems="center">
        {colorMode === "light" ? (
          <SunIcon boxSize="6" my="auto" mr="4" />
        ) : (
          <DeleteIcon boxSize="6" my="auto" mr="4" />
        )}
        <Text display="inline" textStyle="subHeading">
          Toggle between light mode and
        </Text>
        <Text
          display="inline"
          textStyle="subHeading"
          fontSize="2xl"
          mx="2"
          bgGradient={
            colorMode === "light"
              ? "linear(to-l, #1B89E7, #223D89)"
              : pinkPurpleGradient
          }
          bgClip="text"
          fontWeight="bold"
        >
          {colorMode === "light" ? "dark" : "sarcastic"}
        </Text>
        <Text display="inline" textStyle="subHeading">
          {" "}
          mode
        </Text>
      </Flex>
    </Center>
  );
}
