import {
  bluePurpleRedGradient,
  pinkPurpleGradient,
  wheatGradient,
} from "@/styles/gradients";
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
        fontSize={["6xl", "8xl", "9xl"]}
        bgGradient={
          colorMode === "light" ? pinkPurpleGradient : bluePurpleRedGradient
        }
        bgClip="text"
        transition="2s"
        px="8"
        mb="4"
        textAlign="center"
      >
        {colorMode === "light" ? "_william schutte_" : '"william schutte"'}
      </Text>
      <Flex
        cursor="pointer"
        onClick={toggleColorMode}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        maxW={["330px", "330px", "350px", "600px"]}
      >
        <ColorModeIcon />
        <Text display="inline" textStyle="subHeading">
          Toggle between
        </Text>
        <AnimateText
          lightText="light"
          darkText="light"
          lightColor={pinkPurpleGradient}
          darkColor={wheatGradient}
        />
        <Text display="inline" textStyle="subHeading">
          mode and
        </Text>
        <AnimateText
          lightText="sarcastic"
          darkText="sarcastic"
          lightColor="linear(to-r, #000000, #674A36)"
          darkColor={pinkPurpleGradient}
          reverseBold
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
