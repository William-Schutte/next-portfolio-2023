import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import ExperienceIcons from "./ExperienceIcons";

export default function Experience() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mt="24" px="4" justifyContent="space-between">
      <Box w="100%">
        <Text textStyle="lgHeading">Full</Text>
        <Text textStyle="lgHeading">Stack</Text>
        <Text textStyle="lgHeading">Experience,</Text>
        <Text
          textStyle="lgHeading"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Engineered
        </Text>
        <Box maxW="560px" my="8">
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? "Modern experience with design oriented frontend"
              : "What does that actually mean? No one cares. Its all about the"}{" "}
          </Text>
          <Text
            display="inline"
            bgGradient="linear(to-l, #1B89E7, #223D89)"
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            {colorMode === "light" ? "frameworks" : "buzz words"}
          </Text>
          <Text display="inline" textStyle="subHeading">
            {colorMode === "light"
              ? ", REST API development, and engineer-focused software."
              : ", giant fonts, and overly colorful gradients."}{" "}
          </Text>
        </Box>
        <ExperienceIcons />
      </Box>
    </Flex>
  );
}
