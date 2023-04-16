import { bluePurpleRedGradient, pinkPurpleGradient } from "@/styles/gradients";
import { Flex, Link, Text, useColorMode, Center } from "@chakra-ui/react";
import ColorModeIcon from "./shared/ColorModeIcon";
import AnimateText from "./shared/AnimateText";
import { UpDownIcon } from "@chakra-ui/icons";

export default function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      h="100vh"
      mb="24"
      px="4"
      flexDir="column"
      id="hero"
      position="relative"
    >
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
      <Link href="#intro">
        <UpDownIcon
          position="absolute"
          bottom="8"
          boxSize="14"
          opacity=".6"
          p="3"
          ml="-8"
          transition=".3s ease"
          _hover={{ opacity: 1, transform: "translateY(-6px) scale(1.2)" }}
        />
      </Link>
    </Center>
  );
}
