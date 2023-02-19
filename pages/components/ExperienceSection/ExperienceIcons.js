import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function ExperienceIcons() {
  return (
    <Center my="14" w="100%" h="100px" gap="8" flexWrap="wrap">
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
        <Text mt="6" textAlign="center">
          React
        </Text>
        <Text textAlign="center">Expert</Text>
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
        <Text mt="6" textAlign="center">
          TypeScript
        </Text>
        <Text textAlign="center">Professional</Text>
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
        <Text mt="6" textAlign="center">
          Chakra
        </Text>
        <Text textAlign="center">Implementer</Text>
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
        <Text mt="6" textAlign="center">
          JavaScript
        </Text>
        <Text textAlign="center">Expert</Text>
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
        <Text mt="6" textAlign="center">
          AWS
        </Text>
        <Text textAlign="center">Practitioner</Text>
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
        <Text mt="6" textAlign="center">
          Node
        </Text>
        <Text textAlign="center">Developer</Text>
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
        <Text mt="6" textAlign="center">
          Python
        </Text>
        <Text textAlign="center">Developer</Text>
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
        <Text mt="6" textAlign="center">
          Docker
        </Text>
        <Text textAlign="center">Implementer</Text>
      </Box>
    </Center>
  );
}
