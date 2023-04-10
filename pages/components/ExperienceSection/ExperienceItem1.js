import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import ImageSlider from "../shared/ImageSlider";

const spin = keyframes`
to {background-position: 200% 0;}
`;

export default function ExperienceItem1() {
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
        <ImageSlider />
      </Box>
      <Box maxW="560px" my="4" py="4">
        <Text textStyle="lgHeading">Cove Tool</Text>
        <Text textStyle="lgHeading" fontSize="2xl" mb="4">
          Full Stack Software Engineer (2022 - Present)
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
          React, TypeScript, JavaScript, Django, Python, Docker, AWS
        </Text>

        <Text textStyle="subHeading" mb="4" textAlign="justify">
          Architecture is an art, so why is engineering software so ugly?
          Software should be beautiful and intuitive regardless of complexity or
          target audience. That's why I've loved my time at Cove Tool, leading
          teams of engineers, mentoring junior devs, and shepherding products
          and features from design to delivery at this fast-paced, mid-sized,
          Series B, climate tech startup. And in the process, we've even reduced
          more carbon emissions than Tesla!
        </Text>
        <Text textStyle="subHeading" mb="4" fontStyle="italic">
          TLDR: "Rockstar developer and mentor helps make the world a better
          place"
        </Text>
      </Box>
    </Flex>
  );
}
