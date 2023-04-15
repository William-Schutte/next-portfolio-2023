import {
  Box,
  Divider,
  Flex,
  SkeletonText,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function ResumeCard() {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDir="column" w="100%" h="100%" p="4" color="blackAlpha.800">
      <Text color="blue.700" fontWeight="bold">
        William Schutte
      </Text>
      <Flex justifyContent="space-between">
        <Text fontSize="xs">Software Engineer</Text>
        <Text fontSize="2xs">WilliamDSchutte</Text>
      </Flex>
      <Text fontSize="2xs" alignSelf="flex-end" lineHeight="1" mt="-1">
        @gmail.com
      </Text>
      <Text fontSize="sm" color="blue.700">
        Experience
      </Text>
      <Divider borderBottom="1px solid gray"></Divider>
      <Text fontSize="2xs">Software Engineer</Text>
      <SkeletonText noOfLines={4} spacing="1" px="1" startColor="gray.400" />
      <Text fontSize="2xs">Javascript Developer</Text>
      <SkeletonText noOfLines={4} spacing="1" px="1" startColor="gray.400" />
      <Text fontSize="2xs">Web Developer</Text>
      <SkeletonText noOfLines={4} spacing="1" px="1" startColor="gray.400" />
      <Text fontSize="sm" color="blue.700">
        Skills
      </Text>
      <Divider borderBottom="1px solid gray"></Divider>
      <Text fontSize="2xs">React, TypeScript, Python, Django</Text>
      <Text fontSize="2xs">Frontend Development, Fullstack Development</Text>
      <SkeletonText noOfLines={3} spacing="1" px="1" startColor="gray.400" />
    </Flex>
  );
}
