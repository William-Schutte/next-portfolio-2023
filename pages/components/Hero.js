import { Box, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box my="20" mx="6">
      <Text textStyle="lgHeading">Prepare to be</Text>
      <Text
        textStyle="lgHeading"
        fontSize="6xl"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        mildly impressed
      </Text>
      <Box maxW="560px" my="8">
        <Text display="inline" textStyle="subHeading">
          Get to know the most{" "}
        </Text>
        <Text
          display="inline"
          bgGradient="linear(to-l, #1B89E7, #223D89)"
          bgClip="text"
          textStyle="subHeading"
          fontWeight="bold"
        >
          adequate full-stack developer{" "}
        </Text>
        <Text display="inline" textStyle="subHeading">
          you've never heard of through a generically realized modern website
        </Text>
      </Box>
    </Box>
  );
}
