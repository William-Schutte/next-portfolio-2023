import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import ImageSlider from "../shared/ImageSlider";

const spin = keyframes`
to {background-position: 200% 0;}
`;
const ofgImages = [
  "/ofg1.png",
  "/ofg2.png",
  "/ofg3.png",
  "/ofg4.png",
  "/ofg5.png",
];
export default function ExperienceItem4() {
  return (
    <Flex mt="12" mb="32" px="4" justifyContent="space-between">
      <Box maxW="560px" my="8" py="4">
        <Text textStyle="lgHeading">OFG Web Development</Text>
        <Text textStyle="lgHeading" fontSize="2xl" mb="4">
          Web Developer (2019 - 2021)
        </Text>

        <Text
          textStyle="lgHeading"
          fontSize="3xl"
          mb="4"
          bgClip="text"
          bgGradient="linear-gradient(to right, #12c2e9, #c471ed, #f64f59, #c471ed, #12c2e9);"
          bgSize="200% 100%"
          animation={`${spin} 6s infinite linear`}
        >
          Wordpress, HTML, CSS
        </Text>
        <Text textStyle="subHeading" mb="4" textAlign="justify">
          Working remotely directly with the company owner and lead developer, I
          learned a lot about the business and innerworkings of client-oriented
          work and product excellence within a very short time. Before long, I
          was managing content updates for WordPress sites and refactoring old,
          outdated PHP pages into more maintainable HTML, CSS, and JS.
        </Text>
        <Text textStyle="subHeading" mb="4" fontStyle="italic">
          TLDR: "Intro to the world of web dev."
        </Text>
      </Box>
      <Box
        w="500px"
        h="500px"
        mx="6"
        mt="12"
        borderRadius="2xl"
        overflow="clip"
        bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      >
        <ImageSlider imgArray={ofgImages} altText="OFG Work Examples" right />
      </Box>
    </Flex>
  );
}
