import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import ImageSlider from "../shared/ImageSlider";

const spin = keyframes`
to {background-position: 200% 0;}
`;
const coniferImages = [
  "/bmaps1.png",
  "/bmaps2.png",
  "/bmaps3.png",
  "/bmaps4.png",
  "/bmaps5.png",
];

export default function ExperienceItem2() {
  return (
    <Flex mt="12" mb="32" px="4" justifyContent="space-between">
      <Box maxW="560px" my="8" py="4">
        <Text textStyle="lgHeading">Conifer Point</Text>
        <Text textStyle="lgHeading" fontSize="2xl" mb="4">
          JavaScript Developer (2021 - 2022)
        </Text>

        <Text
          textStyle="lgHeading"
          fontSize="3xl"
          mb="4"
          bgClip="text"
          // textAlign="center"
          bgGradient="linear-gradient(to right, #12c2e9, #c471ed, #f64f59, #c471ed, #12c2e9);"
          // bgGradient="linear-gradient(to right, blue, red, blue);"
          bgSize="200% 100%"
          animation={`${spin} 6s infinite linear`}
        >
          React, JavaScript, 3Dmol.js, Django, Python, MaterialUI
        </Text>
        <Text textStyle="subHeading" mb="4" textAlign="justify">
          At Conifer Point, a small startup in the computational chemistry
          field, I was able to leverage my biochemistry background to develop
          and optimize 3D drug discovery tools and personally help labs
          searching for new active drug candidates.
        </Text>
        <Text textStyle="subHeading" mb="4" fontStyle="italic">
          TLDR: "Recursive compound decomposition, intramolecular bond rotation,
          and Lennard-Jones potential simulation? No problem."
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
        <ImageSlider
          imgArray={coniferImages}
          altText="Conifer Point Work Examples"
          right
        />
      </Box>
    </Flex>
  );
}
