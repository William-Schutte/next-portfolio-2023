import { Box, Flex, Text } from "@chakra-ui/react";
import ExperienceIcons from "./ExperienceIcons";

export default function Experience() {
  return (
    <Flex mt="24" px="4" justifyContent="space-between">
      <Box w="100%">
        <Text textStyle="lgHeading" fontSize="6xl">
          Full
        </Text>
        <Text textStyle="lgHeading" fontSize="6xl">
          Stack
        </Text>
        <Text textStyle="lgHeading" fontSize="6xl">
          Experience,
        </Text>
        <Text
          textStyle="lgHeading"
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Engineered
        </Text>
        <Box maxW="560px" my="8">
          <Text display="inline" textStyle="subHeading">
            What does that actually mean? No one cares. Its all about the{" "}
          </Text>
          <Text
            display="inline"
            bgGradient="linear(to-l, #1B89E7, #223D89)"
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            buzz words{" "}
          </Text>
          <Text display="inline" textStyle="subHeading">
            and overly colorful presentation.
          </Text>
        </Box>
        <ExperienceIcons />
      </Box>
    </Flex>
  );
}
