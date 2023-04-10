import { bluePurpleRedGradient, pinkPurpleGradient } from "@/styles/gradients";
import { DeleteIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, useColorMode, Center } from "@chakra-ui/react";
import ColorModeIcon from "./shared/ColorModeIcon";
import AnimateText from "./shared/AnimateText";

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
        <ColorModeIcon />
        <Text display="inline" textStyle="subHeading">
          Toggle between light mode and
        </Text>
        <AnimateText
          lightText="dark"
          darkText="sarcastic"
          lightColor="linear(to-l, #1B89E7, #223D89)"
          darkColor={pinkPurpleGradient}
        />
        <Text display="inline" textStyle="subHeading">
          {" "}
          mode
        </Text>
      </Flex>
    </Center>
  );
}
