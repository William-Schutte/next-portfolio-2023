import {
  Box,
  Button,
  Divider,
  Flex,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function LinkedInCard() {
  return (
    <Flex flexDir="column" w="100%" h="100%" p="4" color="blackAlpha.800">
      <Flex flexDir="column" overflow="clip" bg="white" borderRadius="lg">
        <Flex w="100%" h="20" position="relative">
          <Image src="/coveBanner.jpeg" fill />
        </Flex>

        <Flex
          w="16"
          h="16"
          borderRadius="50"
          overflow="clip"
          position="absolute"
          top="14"
          left="8"
          bg="white"
        >
          <Flex
            w="56px"
            h="56px"
            borderRadius="28"
            position="relative"
            m="auto"
            overflow="clip"
          >
            <Image src="/willProfilePic.jpeg" fill />
          </Flex>
        </Flex>
        <Box position="absolute" top="32" right="5">
          <Image src="/icon-linkedin.svg" width="60" height="60"></Image>
        </Box>
        <Flex flexDir="column" p="2" mt="5">
          <Text color="blue.700" fontWeight="bold">
            William Schutte
          </Text>
          <Text fontSize="xs">Full Stack Software Engineer</Text>
          <Text fontSize="xs">Atlanta, GA</Text>
        </Flex>
      </Flex>
      <Flex mt="2" flexDir="column" p="3" bg="white" borderRadius="lg">
        <Text fontWeight="bold">Experience</Text>
        <Text fontSize="xs">Full Stack Software Engineer</Text>
      </Flex>
    </Flex>
  );
}
