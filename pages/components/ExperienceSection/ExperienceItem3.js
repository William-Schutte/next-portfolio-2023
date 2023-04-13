import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import ImageSlider from "../shared/ImageSlider";

const spin = keyframes`
to {background-position: 200% 0;}
`;
const iterativeImages = [
  "/iterative1.png",
  "/iterative2.png",
  "/iterative3.png",
];

export default function ExperienceItem3() {
  return (
    <Flex my="16" px="4" justifyContent="space-between">
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
          imgArray={iterativeImages}
          altText="Iterative AI Work Examples"
        />
      </Box>
      <Box maxW="560px" my="8" py="4">
        <Text textStyle="lgHeading">Iterative AI</Text>
        <Text textStyle="lgHeading" fontSize="2xl" mb="4">
          Capstone Apprenticeship Project (2021)
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
          Gatsby, React, JavaScript
        </Text>

        <Text textStyle="subHeading" mb="4" textAlign="justify">
          Practicum Bootcamp partners with early stage startups to develop MVPs
          for new products and services. After completing my fullstack bootcamp
          curriculum, I partnered with a couple other students to create a brand
          new landing page for Iterative, a startup in the ML/AI space. We
          delivered a beautiful Gatsby site that they were able to launch almost
          immediately, and its still in use today!
        </Text>
        <Text textStyle="subHeading" mb="4" fontStyle="italic">
          TLDR: "Engineered a huge modern frontend upgrade to a worthy startup
          in just 4 weeks"
        </Text>
      </Box>
    </Flex>
  );
}
