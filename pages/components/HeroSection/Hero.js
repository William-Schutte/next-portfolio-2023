import {
  Box,
  Button,
  Flex,
  Image as ChakraImage,
  Text,
  keyframes,
} from "@chakra-ui/react";
import Image from "next/image";

const userImageUrls = [
  "https://randomuser.me/api/portraits/women/0.jpg",
  "https://randomuser.me/api/portraits/men/0.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
];

const translateX = keyframes`
  from {transform: translate(-133%, 0%)}
  to {transform: translate(0%, 0%);}
`;

const translateXRev = keyframes`
  from {transform: translate(0%, 0%)}
  to {transform: translate(-133%, 0%);}
`;

export default function Hero() {
  const translateAnimate = `${translateX} infinite 12s linear`;
  const translateAnimateRev = `${translateXRev} infinite 15s linear`;

  return (
    <Flex my="24" px="4" justifyContent="space-between">
      <Box>
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
        <Button
          bg="linear-gradient(90deg, rgba(131,58,180,.9) 0%, rgba(253,29,29,.9) 100%);"
          color="white"
          size="lg"
          px="8"
          mt="4"
          mb="12"
          transition="all .3s ease"
          _hover={{
            opacity: 0.5,
          }}
        >
          Let's Connect!
        </Button>
        <Flex>
          {userImageUrls.map((url, index) => (
            <Box w="7" zIndex={10 - index}>
              <ChakraImage
                src={url}
                borderRadius="50"
                border="4px solid white"
                h="12"
                minW="12"
              />
            </Box>
          ))}
        </Flex>
        <Text display="inline" fontSize="12" fontWeight="500">
          Literally over 300 LinkedIn connections, how could he not be great?
        </Text>
      </Box>
      <Flex
        w="400px"
        h="300px"
        flexDir="column"
        overflow="hidden"
        mx="6"
        mt="12"
        p="6"
        borderRadius="2xl"
        bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      >
        <Flex
          animation={translateAnimate}
          w="100%"
          h="50%"
          mb="4"
          position="relative"
        >
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="0%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-react.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.200"
            position="absolute"
            left="33%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-ts.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="67%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-chakra.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.600"
            position="absolute"
            left="100%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-js.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="133%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-react.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.200"
            position="absolute"
            left="166%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-ts.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="200%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-chakra.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.600"
            position="absolute"
            left="233%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-js.svg" width={100} height={100} />
          </Box>
        </Flex>

        <Flex
          animation={translateAnimateRev}
          w="100%"
          position="relative"
          bg="black"
        >
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="0%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-aws.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="33%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-node.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="67%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-python.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.800"
            position="absolute"
            left="100%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-docker.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="133%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-aws.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.700"
            position="absolute"
            left="166%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-node.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.100"
            position="absolute"
            left="200%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-python.svg" width={100} height={100} />
          </Box>
          <Box
            w="100px"
            h="100px"
            p="2"
            borderRadius="2xl"
            bg="gray.800"
            position="absolute"
            left="233%"
            transform="auto"
            rotate="-8deg"
            boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
          >
            <Image src="/icon-docker.svg" width={100} height={100} />
          </Box>
        </Flex>
        {/* <Image src="/icon-python.svg" width={100} height={100} /> */}
      </Flex>
    </Flex>
  );
}
