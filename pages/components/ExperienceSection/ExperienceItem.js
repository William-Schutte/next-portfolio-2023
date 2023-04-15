import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import ImageSlider from "../shared/ImageSlider";

const spin = keyframes`
to {background-position: 200% 0;}
`;
const coveImages = ["/cove-1.png", "/cove-2.png", "/cove-3.png"];

export default function ExperienceItem({
  company,
  title,
  tech,
  description,
  tldr,
  imagesList,
  right = false,
}) {
  return (
    <Flex
      my="40"
      px="4"
      justifyContent="space-between"
      flexDirection={right ? "row-reverse" : "row"}
    >
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
          imgArray={imagesList}
          altText={`${company} Work Examples`}
        />
      </Box>
      <Box maxW="560px" my="4" py="4">
        <Text textStyle="lgHeading">{company}</Text>
        <Text textStyle="lgHeading" fontSize="2xl" mb="4">
          {title}
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
          {tech}
        </Text>

        <Text textStyle="subHeading" mb="4" textAlign="justify">
          {description}
        </Text>
        <Text textStyle="subHeading" mb="4" fontStyle="italic">
          {tldr}
        </Text>
      </Box>
    </Flex>
  );
}
