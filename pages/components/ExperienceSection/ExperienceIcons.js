import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function ExperienceIcons() {
  return (
    <Center my="14" px="8" w="100%" gap="8" flexWrap="wrap">
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.700"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-react.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          React
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Expert
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.200"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-ts.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          TypeScript
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Professional
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.700"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-chakra.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          Chakra
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Implementer
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.600"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-js.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          JavaScript
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Expert
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.100"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-aws.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          AWS
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Practitioner
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.700"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-node.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          Node
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Developer
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.100"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-python.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          Python
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Developer
        </Text>
      </Box>
      <Box>
        <Box
          w="100px"
          h="100px"
          p="2"
          borderRadius="2xl"
          bg="gray.800"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        >
          <Image src="/icon-docker.svg" width={100} height={100} />
        </Box>
        <Text mt="8" textAlign="center" textStyle="mediumText">
          Docker
        </Text>
        <Text textAlign="center" textStyle="mediumText">
          Implementer
        </Text>
      </Box>
    </Center>
  );
}
